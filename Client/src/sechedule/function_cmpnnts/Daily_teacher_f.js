import React from "react";
import PrivateRoute from "../../auth/PrivateRoute";
import Daily_teacher from "../Daily_teacher";
// import { useGetUserByIDQuery } from "../../users/usersApiSlice";
import { useGetLessonsByUserIDQuery } from "../../lessons/lessonsApiSlice";
const Daily_teacher_f = ()=>{
    const {CheckToken} = PrivateRoute()
    CheckToken()
     const { data, isError, isSuccess, isLoading, refetch } =  useGetLessonsByUserIDQuery()
    //  if(isLoading)
    //     console.log('Lodaing')
    
//     const [GetBYID, {isError, error, isSuccess,isLoading,data}] =
// useGetUserByIDQuery()

return(
    <>
    {/* {isLoading? <p>Loading</p>:null} */}
{console.log(`outer data ${data}`)}
  
    <Daily_teacher data={data} />
    </>
)
}
export default Daily_teacher_f