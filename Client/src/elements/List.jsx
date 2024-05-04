import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import {appointments} from '../sechedule/demo-data/appointments'
export default function CheckboxListSecondary() {
  const [checked, setChecked] = React.useState([1]);


  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop:'10%' , marginX:'35%'}}>
      {appointments.map((value) => {
        const labelId = `${value.title}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
    
            <ListItemText id={labelId} primary={`Line item ${value.title}`} />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
              {/* <Button variant="contained" size="small">Contained</Button> */}
              <Button size="small" variant="contained" >מערכת שבועית</Button>
              </ListItemAvatar>
           
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
