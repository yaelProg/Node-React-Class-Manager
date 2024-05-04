import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@date-io/date-fns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { useAddLessonMutation } from '../lessons/lessonsApiSlice';
import { useGetStudentsQuery } from '../students/studentsApiSlice';
import Autocomplete from '@mui/material/Autocomplete';
import DecodeToken from '../auth/decodeToken';
const times = ['09:00', '09:45', '10:30', '11:15', '12:00'];

function MyForm() {
    const [AddLesson]= useAddLessonMutation()
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [teacherName, setTeacherName] = useState(DecodeToken().fullname);
  const [student, setstudent] = useState({});
  const [title, settitle] = useState('');
  const {data: students, isLoading, isSuccess, itudentror, error} = useGetStudentsQuery()

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleTeacherNameChange = (event) => {
    setTeacherName(event.target.value);
  };

  const handlestudentChange = (event) => {
    setstudent(event.target.value);
  };

  const handletitleChange = (event) => {
    settitle(event.target.value);
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    if (selectedDate && selectedTime && teacherName && student) {
        const formattedDateTime = selectedDate.toISOString().split('T')[0] + `T${selectedTime}:00.000Z`;
        const end = new Date(selectedDate);
        const [hours, minutes] = selectedTime.split(':');
        end.setHours(parseInt(hours));
        end.setMinutes(parseInt(minutes) + 45);
        const formattedEndDate = end.toISOString();
        

      // Here you would send the formattedDateTime to the server
        AddLesson({teacherId: DecodeToken()._id, studentId: student._id, startDate: selectedDate, endDate: formattedEndDate, title: title })
      console.log('Selected Date and Time:', formattedDateTime);
      console.log('Selected END Date and Time:', formattedEndDate);
      console.log('Teacher Name:', teacherName);
      console.log('Student Name:', student);
      console.log('title:', title);
    } else {
      console.log('Please fill in all required fields');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: '400px' }}>
        <Typography variant="h5" gutterBottom>
          Schedule Appointment
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TextField
            id="date-picker"
            label="Select Date"
            type="date"
            defaultValue={new Date()}
            value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
          />
         <InputLabel id="time-select-label">Select Time</InputLabel>
          <Select
           labelId="time-select-label"
            InputLabel="Select Time"
            value={selectedTime}
            onChange={handleTimeChange}
            fullWidth
            margin="normal"
          >
            {times.map((time) => (
              <MenuItem key={time} value={time}>
                {time}
              </MenuItem>
            ))}
          </Select>
          <TextField
            id="teacher-name"
            label="Teacher Name"
            variant="outlined"
            type="text"
            value={DecodeToken().fullname}
            onChange={handleTeacherNameChange}
            fullWidth
            margin="normal"
          />
        
          <TextField
            id="title"
            label="title (Optional)"
            variant="outlined"
            type="text"
            value={title}
            onChange={handletitleChange}
            fullWidth
            margin="normal"
          />
       {students && (
  <Autocomplete
    id="student"
    options={students}
    getOptionLabel={(student) => student.firstName +' '+ student.LastName}
    value={student}
    onChange={(event, newValue) => {
        setstudent(newValue);
    }}
    renderInput={(params) => <TextField {...params} label="Select Student" variant="outlined" />}
    fullWidth
    margin="normal"
  />
)}

        </LocalizationProvider>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default MyForm;
