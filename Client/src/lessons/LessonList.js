 import { useGetLessonsQuery, useDeleteLessonMutation } from "./lessonsApiSlice";

const {data: lessons, isLoading, isSuccess, iessonror, error} = useGetLessonsQuery('', 
{refetchOnMountOrAgChange: true, 
refetchOnFocus: true})
if (isLoading) return <h1>Loading...</h1>

const [deleteFunc] = useDeleteLessonMutation()

const handleDeleteClick = (lesson) =>{
    deleteFunc({id: lesson._id})
}