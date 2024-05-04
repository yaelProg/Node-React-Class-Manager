 import { useGetUsersQuery, useDeleteUserMutation, useGetUserByIDQuery } from "./usersApiSlice";

const {data: users, isLoading, isSuccess, isError, error} = useGetUsersQuery('', 
{refetchOnMountOrAgChange: true, 
refetchOnFocus: true})
// if(isLoading) return <h1>Loading...</h1>

const [deleteFunc] = useDeleteUserMutation()

const handleDeleteClick = (user) =>{
    deleteFunc({id: user._id})
}