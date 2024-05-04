import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const emails = ['username@gmail.com', 'user02@gmail.com'];

export default function LessonForm(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={true} className="centered-dialog">
      <DialogTitle>הוספת שיעור</DialogTitle>
      <TextField id="outlined-basic" label="שם המורה" variant="outlined"  type='text'/>
      <TextField id="outlined-basic" label="שם התלמידה" variant="outlined"  type='text'/>
      <TextField id="outlined-basic" label="נושא (אופציונלי)" variant="outlined"  type='text'/>
      <DatePicker label="Uncontrolled picker" defaultValue={new Date()} />

      
    </Dialog>
  );
}




