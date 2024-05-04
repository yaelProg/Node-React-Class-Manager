
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import heLocale from 'date-fns/locale/he'; 
import { styled } from '@mui/material/styles';

import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  AppointmentTooltip,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import Button from '@mui/material/Button';
import DateFnsUtils from '@date-io/date-fns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { appointments } from './demo-data/month-appointments';
import { Locale } from 'date-fns';
import { DatePicker } from '@mui/lab';
// import {  } from 'react-router-dom';
import { withRouter } from 'react-router-dom'; 
import Checkbox from '@mui/material/Checkbox';

// const Appointment = ({
//   children, 
//   data, 
//   onClick, 
//   toggleVisibility, 
//   onAppointmentMetaChange
// })
// const StyledContainer = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
// });
// const Appointment = ({
//   children,
//   data,
//   onClick,
//   toggleVisibility,
//   onAppointmentMetaChange,
//   ...restProps
// }) => (
//   <Appointments.Appointment {...restProps}>
  
//     <StyledContainer>
//       <Checkbox
//         onChange={() => {
//           alert("click");
//           // toggleVisibility();
//           // onAppointmentMetaChange({ target: target.parentElement.parentElement, data });
//         }}
//         color="primary"
//       />

//       {children}
//     </StyledContainer>
//   </Appointments.Appointment>
// );
export default class Month_teacher extends React.PureComponent {


  
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      
    };
    
    // this.handleClick = this.handleClick.bind(this);
  }
  
  handleDayClick = (date) => {
    // Handle the click event here
    // this.props.history.push(`/Daily/${date}`)
    // const history = useHistory();
    //  this.props.handleDayClickNavigation(date)
    alert("click")
    // debugger;
    // this.history.push(`/Daily/${date}`);

  }


  render() {
    const { data } = this.state;
   
    return (
      <Paper className="Paper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', marginTop:"10%", direction: 'rtl', justifyContent:"center", marginLeft:"300px"}}>
         {/* <LocalizationProvider dateAdapter={DateFnsUtils} Locale={heLocale}> */}
{console.log(data)}
        <Scheduler
          data={data}
          dir="rtl"
          // locale={heLocale}
     
          
        >
          <ViewState
            defaultCurrentDate="2018-07-27"
          />
          
             {/* <EditingState
             onCommitChanges={()=>{alert("")}}
           /> */}
          
          <MonthView 
          cellComponent={({ startDate, today, ...restProps }) => (
            <MonthView.Cell
              // startDate={startDate}
              // today={today}
              // {...restProps}
            >
              {/* <SmallButton onClick={() => this.handleDayClick(startDate)} /> */}
              <Button variant="contained" onClick={()=>{alert("clicking")}} buttonnn/>
            </MonthView.Cell>
          )}
          />
          <Toolbar />
          <DateNavigator />
          <TodayButton className="today-button-classname"/>
          <Appointments />
        </Scheduler>
        {/* </LocalizationProvider> */}
      </Paper>
    );
  }
}
