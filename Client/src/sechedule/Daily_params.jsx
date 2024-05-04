import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Appointments,
  AppointmentTooltip,
  Scheduler,
  DayView,
} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import appointments from './demo-data/today-appointments';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add'; 
import Button from '@mui/material/Button';

// import DateAdapter from '@mui/lab/AdapterDateFns'; 
import heLocale from 'date-fns/locale/he'; // Hebrew locale from date-fns
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { enUS , heIL } from '@mui/x-date-pickers';

const PREFIX = 'Demo';

const classes = {
  button: `${PREFIX}-button`,
};

const StyledContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

// const StyledIconButton = styled(IconButton)(({ theme }) => ({
//   color: theme.palette.background.default,
// }));

const Appointment = ({
  children,
  data,
  onClick,
  toggleVisibility,
  onAppointmentMetaChange,
  ...restProps
}) => (
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

export default class Daily_params extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      visible: false,
      appointmentMeta: {
        target: null,
        data: {},
      },
    };
    this.toggleVisibility = () => {
        const { visible } = this.state;
        this.setState({ visible: !visible });
      };
      

    this.onAppointmentMetaChange = ({ data, target }) => {
      this.setState({ appointmentMeta: { data, target } });
    };
  }

  render() {
    const {selectedDate} = this.params;
    return (
      <>
   <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', marginTop:"10%", direction: 'rtl', justifyContent:"center", marginLeft:"300px"}}>
  <Scheduler data={this.state.data} dir="rtl" locale={heLocale} defaultCurrentDate={selectedDate}>
    <DayView
      cellDuration={45} // Each cell represents 45 minutes
      startDayHour={9} // Start schedule at 9 AM
      endDayHour={16}
      dir="rtl"
    />

    <Appointments appointmentComponent={Appointment} />
    <AppointmentTooltip
      visible={this.state.visible}
      appointmentMeta={this.state.appointmentMeta}
      onVisibilityChange={this.toggleVisibility}
    />
  </Scheduler>

  <div style={{ width: '100%', marginTop: '10px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
    <Button variant="contained" startIcon={<AddIcon style={{marginLeft:'5px'}}/>} style={{ width: '80%', height: '50px', marginBottom:'10px', marginRight:"15%"}}>
      <div style={{ fontWeight: 'bold' }}> הוספת שיעור יומי </div>
    </Button>
  </div>
</Paper>



 

  </>
    );
  }
}
