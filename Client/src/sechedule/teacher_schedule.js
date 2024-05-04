

import Scheduler, { View , SchedulerTypes} from 'devextreme-react/scheduler';
import { useGetLessonsByUserIDQuery } from '../lessons/lessonsApiSlice';
import 'devextreme/dist/css/dx.light.css';
import heMessages from "./he.json";
import { locale, loadMessages } from "devextreme/localization";
import { Button, CheckBox } from 'devextreme-react';
import { useState } from 'react';
import { ViewSwitcher } from '@devexpress/dx-react-scheduler';
import {useGetStudentsQuery} from '../students/studentsApiSlice'
import {useAddLessonMutation} from '../lessons/lessonsApiSlice'
import { useUpdateLessonCompleteMutation } from '../lessons/lessonsApiSlice';
import DecodeToken from '../auth/decodeToken';
import React from 'react';
const Shushan =  () => {
  
console.log(DecodeToken().fullname)
 const {data: students, isError_s, isLoading_s, error_s} = useGetStudentsQuery()
 const {data, isError, isLoading, error} =  useGetLessonsByUserIDQuery()
 const [addLessonFunc] = useAddLessonMutation()
 const [formObject, setFormObject]= useState({});
 const [checkBoxChange, setCheckBoxChange] =  useState(false)
  const views = ['day', 'week', 'month'];
  const [updateComplete] = useUpdateLessonCompleteMutation();
  //const [isDayView, setIsDayView] = useState(true)
 loadMessages(heMessages);
  //locale(navigator.language);
  locale("he-IL")

  
  if(isLoading) return <h1>Loading</h1>
  console.log(data)
  if(isError) return <h1>{JSON.stringify(error)}</h1>
  function handleCheck(lessonId, isChecked) {
    if (isChecked) {
        // התיבה מוזגנת
        console.log('Checkbox filled:', lessonId);
        updateComplete(lessonId)
        // ניתן לבצע כאן פעולות נדרשות כאשר התיבה מוזגנת
    } else {
        // התיבה ריקה
        console.log('Checkbox emptied:', lessonId);
        // ניתן לבצע כאן פעולות נדרשות כאשר התיבה מרוקנת
    }
}
  //const lessonIntervals = [{lessonNum: 'שיעור ראשון'}, {lessonNum:'שיעור שני'}, {lessonNum:'שיעור שלישי'} , {lessonNum:'שיעור רביעי'}, {lessonNum:'שיעור חמישי'},{lessonNum:'שיעור שישי'},{lessonNum:'שיעור שביעי'}]
 return(
 <>

 {console.log(students)}
      <Scheduler
      
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', marginTop:"10%", justifyContent:"center", marginLeft:"300px"}}
    dataSource={data}
    
     // cellDuration={45}
    views={views}
    // appointmentTooltipComponent={<p>this is a title</p>} this defines the form of the appointment
    
    defaultCurrentView="day"
    startDayHour={9}
    endDayHour={20}
    remoteFiltering={true}
    dateSerializationFormat="yyyy-MM-ddTHH:mm:ssZ"
    textExpr="title"
    allDayExpr="AllDay"

    appointmentTemplate =  {function (data, index, element) {
      // if(checkBoxChange) {
      //   console.log('changeee')
      //   handleCheck(data.appointmentData._id, this.checked);
      //   setCheckBoxChange(false);
      // }
      const checkbox = document.createElement('input');
      checkbox.checked = data.appointmentData.complete;
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('name', `appointment-${data.id}`);
    
    
     // checkbox.onchange(handleCheck(data))
     checkbox.onchange = function() {
    console.log(this.checked)
    setCheckBoxChange(true)
    //handleCheck(data.appointmentData._id, this.checked)
  };
  
      element.append(checkbox);
     element.append( `  ${data.appointmentData.title}`);
     {console.log(data)}
  element.dir="rtl"
  
  //add here everything we want on the appointment
    
  }}
  
  const onAppointmentFormOpening = {(e) => {
   
    let { startDate } = new Date();
    e.form.option('items', [
      {
        label: {
          text: 'שם התלמידה',
        },
        editorType: 'dxSelectBox',
        dataField: 'studentId',
        editorOptions: {
          items: students,
          displayExpr: 'firstName',
          valueExpr: '_id',
          onValueChanged(args) {
           // movieInfo = getMovieById(args.value);
           // e.form.updateData('studentId', args.value);
            setFormObject( structuredClone(formObject),  {studentId: args.value})
            // e.form.updateData(
            //   'endDate',
            //   //new Date(startDate.getTime() + 60 * 1000 * movieInfo.duration),
            // );
          },
        },
      },
      // {
      //   label: {
      //     text: 'שעת השיעור',
      //   },
      //   editorType: 'dxSelectBox',
      //   dataField: 'lessonNum',
      //   editorOptions: {
      //     items: lessonIntervals,
      //     displayExpr: 'lessonNum',
      //     valueExpr: '_id',
      //     // onValueChanged(args) {
      //     //  // movieInfo = getMovieById(args.value);
      //     //   e.form.updateData('director', movieInfo.director);
      //     //   e.form.updateData(
      //     //     'endDate',
      //     //     //new Date(startDate.getTime() + 60 * 1000 * movieInfo.duration),
      //     //   );
      //     // },
      //   },
      // },

      {
        label: {
          text: 'שם המורה',
        },
        editorType: 'dxTextBox',
       //dataField: 'lessonNum',
        editorOptions: {
          value: DecodeToken().fullname,
          valueExpr: DecodeToken()._id,
          
          onValueChanged(args) {
           // movieInfo = getMovieById(args.value);
            //e.form.updateData('teacherId', args.value);
            setFormObject( structuredClone(formObject),  {teacherId: args.value})
            // e.form.updateData(
            //   'endDate',
            //   //new Date(startDate.getTime() + 60 * 1000 * movieInfo.duration),
            // );
          },
        },
      },
      {
        label: {
          text: 'נושא השיעור (אופציונלי)',
        },
        editorType: 'dxTextBox',
       //dataField: 'lessonNum',
        editorOptions: {
          
        
          
          onValueChanged(args) {
           // movieInfo = getMovieById(args.value);
           // e.form.updateData('title',args.value);
           setFormObject( structuredClone(formObject),  {title: args.value})
            // e.form.updateData(
            //   'endDate',
            //   //new Date(startDate.getTime() + 60 * 1000 * movieInfo.duration),
            // );
          },
        },
      },
     // {
      //   label: {
      //     text: 'Director',
      //   },
      //   name: 'director',
      //   editorType: 'dxTextBox',
      //   editorOptions: {
      //     value: movieInfo.director,
      //     readOnly: true,
      //   },
      // },
      {
        dataField: 'startDate',
        editorType: 'dxDateBox',
        editorOptions: {
          width: '100%',
          type: 'datetime',
          onValueChanged(args) {
            startDate = args.value;
            // e.form.updateData('startDate', startDate);
            // e.form.updateData(
            //   'endDate',
            //   new Date(startDate.getTime() + 45),
            // );
            setFormObject( structuredClone(formObject),  {startDate: args.value})
            setFormObject( structuredClone(formObject),  {endDate: args.value})
          },
        },
      },
      // e.form.on('optionChanged', (args) => {
      //   if (args.name === 'formData' && args.fullName.startsWith('formData.')) {
      //     // Check if the formData has changed
      //     const fieldName = args.fullName.split('.')[1];
      //     if (fieldName === 'studentId' || fieldName === 'startDate' || fieldName === 'endDate' || fieldName === 'title') {
      //       // Update your formObject accordingly
      //       formObject[fieldName] = args.value;
      //     }
      //   } else if (args.name === 'visible' && args.value === false) {
      //     // If the form is closed, perform your action (e.g., add lesson)
      //     // Example:
      //     console.log('Done button clicked. Form closed.');
      //     console.log('Form data:', formObject);
      //     // Here you can call your mutation function or perform any other action
      //     addLessonFunc(formObject); // Assuming addLessonFunc is your mutation function
      //   }
      // })
    
      
      // {
      //   name: 'endDate',
      //   dataField: 'endDate',
      //   editorType: 'dxDateBox',
      //   editorOptions: {
      //     width: '100%',
      //     type: 'datetime',
      //     readOnly: true,
      //   },
      // },
      // {
      //   dataField: 'price',
      //   editorType: 'dxRadioGroup',
      //   editorOptions: {
      //     dataSource: [5, 10, 15, 20],
      //     itemTemplate(itemData) {
      //       return `$${itemData}`;
      //     },
      //   },
      // },
     
    ]);
   
  }}
  // onAppointmentAdding  = {alert("adding")}
// onAppointmentAdded={alert("added")}
    
    
    
   
  />
  </>
 )
}
   

export default Shushan;