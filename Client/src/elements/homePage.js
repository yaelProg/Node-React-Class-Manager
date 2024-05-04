import React from "react";
import Navbar from './NavBar'
import Empty from "./empty";
//import { useGetPathByIdQuery } from '../app/videoApiSlice';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DecodeToken from '../auth/decodeToken'
import PrivateRoute from '../auth/PrivateRoute'
// import {useGetLessonsQuery} from './lessons/lessonsApiSlice'
const HomePage = ()=>{
    const {CheckToken} = PrivateRoute()
    CheckToken()
    return(
        <p>homePage</p>
    )
    // const navigate = useNavigate()

    // const Request = async () => {
        
        
        
    //     // const ans = await axios("http://localhost:9876/api/functionToken/" + localStorage.getItem("token"))

    //     if ((localStorage.getItem("token"))==undefined) {

    //         navigate("/Login")
    //     }
    // }
    // useEffect(() => {
    //     Request();

    // }, [])


//     const role = DecodeToken()

//     useEffect(() => {
//         if (role == "admin") {
//             navigate("/homePage_admin")
//         }
//         else {
//             navigate("/login")
//         }

//     }, [role])

//     return(
//         <div>

//             <Navbar/>

            
//         </div>
//     )
 }

export default HomePage;