import apiSlice from "../app/apiSlice";
import DecodeToken from "../auth/decodeToken";
const usersApiSlice = apiSlice.injectEndpoints({
    endpoints:(build) => ({
        getUsers: build.query({
            query:() => ({
                url: "/api/users"
            }),
            validateTages: ["Users"]
        }),
        getUserByID: build.query({
            query:() => ({
                url: "/api/users/"+DecodeToken()._id
            }),
            validateTages: ["Users"]
        }),
        addUser: build.mutation({
           query:(user) => ({
                url: "/api/users",
                method: "POST",
                body: user
           }),
           invalidateTags: ["Users"]
        }),
        deleteUser: build.mutation({
            query: ({id}) => ({
                url: "/api/users",
                method: "DELETE",
                body: {id: id}
            }),
            invalidateTags: ["Users"]
        })
    })
})

export const {useGetUsersQuery, useAddUserMutation, useDeleteUserMutation, useGetUserByIDQuery} = usersApiSlice