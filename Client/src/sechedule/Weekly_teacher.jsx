import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import PrivateRoute from '../auth/PrivateRoute'
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from './demo-data/appointments';
import heLocale from 'date-fns/locale/he'; 
import { Locale } from 'date-fns';
// Import other necessary components...

const PREFIX = 'Demo';

const classes = {
  button: `${PREFIX}-button`,
};

const StyledContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Appointment = ({ children, data, onClick, ...restProps }) => (
  <Appointments.Appointment {...restProps}>
 
    <StyledContainer>
      <Checkbox
        onChange={() => {
          alert("click");
          // toggleVisibility();
          // onAppointmentMetaChange({ target: target.parentElement.parentElement, data });
        }}
        color="primary"
      />
    
      {children}
      </StyledContainer>
  </Appointments.Appointment>
);
const handleCellClick = (event, row, day, date) => {
  alert("clicked cell")
}

export default class Weekly_teacher extends React.PureComponent {
  
  constructor(props) {
    super(props);
    
    this.state = {
      data: appointments, // Replace with your appointment data
      currentDate: '2018-06-27',
    };
  }


  currentDateChange = (currentDate) => {
    this.setState({ currentDate });
  };
  // checkTokenWrapper =()=>{
  //  const  {CheckToken} = PrivateRoute()
  //  CheckToken()
  // }

  // Implement other methods as needed...

  render() {
    const { data, currentDate } = this.state;
   
  // CheckToken()

    return (
      
      <Paper
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '50%',
          marginTop: '10%',
          direction: 'rtl',
          justifyContent: 'center',
          marginLeft: '300px',
        }}
      >
        {/* Your localization and scheduler setup */}
        <Scheduler data={data} height={660} dir="rtl"  onCellClick={handleCellClick} locale={heLocale}>
          <ViewState currentDate={currentDate} onCurrentDateChange={this.currentDateChange} />
          <WeekView startDayHour={9} endDayHour={19} />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments appointmentComponent={Appointment} />
         
        </Scheduler>
      </Paper>
    );
  }

  handleCellClick = (cellData) => {
    // Handle the cell click event here
    console.log('Cell clicked:', cellData);
    // Perform your desired actions based on cellData
  };
}

