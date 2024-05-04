
import './App.css';
import Daily_teacher from './sechedule/Daily_teacher';
import Navbar from './elements/NavBar';
import Navbar_admin from './elements/NavBar_admin';
import Month_teacher from './sechedule/Month_teacher';
import Weekly_teacher from './sechedule/Weekly_teacher';
import { Route, Routes}from 'react-router';
import SignIn from './elements/Sign_in';
import SignUp from './elements/Register';
import CheckboxListSecondary from './elements/List';
import Login from './auth/Login';
import HomePage_admin from './elements/homePage_admin';
import Register from './auth/Register'
import Empty from './elements/empty';
import HomePage from './elements/homePage';
import Daily_teacher_f from './sechedule/function_cmpnnts/Daily_teacher_f';
import Month_teacher_f from './sechedule/function_cmpnnts/Month_teacher_f'
import Weekly_teacher_f from './sechedule/function_cmpnnts/Weekly_teacher_f'
import DecodeToken from './auth/decodeToken';
import Shushan from './sechedule/teacher_schedule'
import Shushan_ from './sechedule/gpt_try';
import MyForm from './elements/time_form';
import LessonForm from './elements/Lesson_form';
function App() {
  return (
<>
{/* <Navbar_admin/> */}
{/* <Navbar/> call it to make it sticky */}
{/* <Daily_teacher/> */}
{/* <Month_teacher/> */}
{/* <Weekly_teacher/> */}
{/* <SignIn/> */}
{/* <SignUp/> */}
{/* <CheckboxListSecondary/> */}
{/* <Empty/> */}
{/* <Register/> */}
{/* <HomePage_teacher/> */}
{/* {console.log(DecodeToken()?._id)} */}

<Routes>
            {/* <Route path="/HomePage" element={<HomePage />}> </Route> */}
            <Route path="/" element={<Login />}> </Route>
            <Route path="/gpt" element={<Shushan_ />}> </Route>
            <Route path="/HomePage_admin" element={<HomePage_admin />}> </Route>
            <Route path="/Login" element={<Login />}> </Route>
            <Route path="/Register" element={<Register />}> </Route>
            <Route path="/Nav_bar" element={<Navbar />}> </Route>
            <Route path="/teacher_schedule" element={<Shushan />}> </Route>
            <Route path="/Weekly_teacher" element={<Weekly_teacher/>}> </Route>
            <Route path="/Month_teacher" element={<Month_teacher_f />}> </Route>
            <Route path="/Daily_teacher" element={<Daily_teacher_f />}> </Route>
            <Route path="/form" element={<MyForm/>}> </Route>
            {/* <Route path="/Photos" element={<PhotosPage />}> </Route> */}
</Routes>
</>
  );
}

export default App;
