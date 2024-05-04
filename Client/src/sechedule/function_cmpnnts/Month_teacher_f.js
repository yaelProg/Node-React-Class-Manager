import React from "react";
import PrivateRoute from "../../auth/PrivateRoute";
import Month_teacher from "../Month_teacher";
import { useGetLessonsByUserIDQuery } from "../../lessons/lessonsApiSlice";
const Daily_teacher_f = ()=>{
    const {CheckToken} = PrivateRoute()
    CheckToken()
    const { data, isError, isSuccess, isLoading, refetch } =  useGetLessonsByUserIDQuery()
   
return(
    <>
     {console.log(`outer data ${data}`)}
    <Month_teacher date={data}/>
    </>
)
}
export default Daily_teacher_f