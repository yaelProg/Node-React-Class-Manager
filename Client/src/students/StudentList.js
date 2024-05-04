 import { useGetStudentsQuery, useDeleteStudentMutation } from "./studentsApiSlice";

const {data: students, isLoading, isSuccess, itudentror, error} = useGetStudentsQuery('', 
{refetchOnMountOrAgChange: true, 
refetchOnFocus: true})
// if(isLoading) return <h1>Loading...</h1>

const [deleteFunc] = useDeleteStudentMutation()

const handleDeleteClick = (student) =>{
    deleteFunc({id: student._id})
}