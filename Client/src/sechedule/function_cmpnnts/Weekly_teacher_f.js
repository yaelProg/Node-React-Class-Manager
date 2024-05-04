import React from "react";
import PrivateRoute from "../../auth/PrivateRoute";
import Weekly_teacher from "../Weekly_teacher";
const Daily_teacher_f = ()=>{
    const {CheckToken} = PrivateRoute()
    CheckToken()
return(
    <>
    <Weekly_teacher/>
    </>
)
}
export default Daily_teacher_f