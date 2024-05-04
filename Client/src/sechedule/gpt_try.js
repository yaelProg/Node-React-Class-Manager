import Scheduler from 'devextreme-react/scheduler';
import { useGetLessonsByUserIDQuery } from '../lessons/lessonsApiSlice';
import 'devextreme/dist/css/dx.light.css';
import heMessages from "./he.json";
import { locale, loadMessages } from "devextreme/localization";
import { useState } from 'react';
import { useGetStudentsQuery } from '../students/studentsApiSlice';
//import { useAppDispatch } from '../app/hooks'; // Assuming Redux is set up properly

import { useAddLessonMutation } from '../lessons/lessonsApiSlice';
import DecodeToken from '../auth/decodeToken';
import React from 'react';

const Shushan_ = () => {
    const [addLesson] = useAddLessonMutation()
  const { data: students, isError_s, isLoading_s, error_s } = useGetStudentsQuery();
  const { data, isError, isLoading, error } = useGetLessonsByUserIDQuery();
  const [formData, setFormData] = useState({}); // State to hold form data
 // const dispatch = useAppDispatch(); // Redux dispatch function

  const onAppointmentFormOpening = (e) => {
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
            setFormData({ ...formData, studentId: args.value });
          },
        },
      },
      {
        label: {
          text: 'שם המורה',
        },
        editorType: 'dxTextBox',
        editorOptions: {
          value: DecodeToken().fullname,
          valueExpr: DecodeToken()._id,
          onValueChanged(args) {
            setFormData({ ...formData, teacherId: args.value });
          },
        },
      },
      {
        label: {
          text: 'נושא השיעור (אופציונלי)',
        },
        editorType: 'dxTextBox',
        editorOptions: {
          onValueChanged(args) {
            setFormData({ ...formData, title: args.value });
          },
        },
      },
      {
        dataField: 'startDate',
        editorType: 'dxDateBox',
        editorOptions: {
          width: '100%',
          type: 'datetime',
          onValueChanged(args) {
            setFormData({ ...formData, startDate: args.value });
          },
        },
      },
    ]);

    // Handling the click event of the existing "Done" button
    e.form.option('onContentReady', (args) => {
      const doneButton = args.element.find('.dx-dialog-button').first(); // Assuming "Done" button is the first button
      doneButton.off('click').on('click', () => {
        // Dispatch Redux action to add lesson
       addLesson(formData)
        // Clear form data after adding lesson
        setFormData({});
      });
    });
  };

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div>
      <Scheduler
        // Other props...
        onAppointmentFormOpening={onAppointmentFormOpening}
      />
    </div>
  );
};

export default Shushan_;
