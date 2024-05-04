import apiSlice from "../app/apiSlice";

const studentsApiSlice = apiSlice.injectEndpoints({
    endpoints:(build) => ({

        getStudents: build.query({
            query:() => ({
                url: "/api/student"
            }),
            validateTages: ["Student"]
        }),
        addStudent: build.mutation({
           query:(student) => ({
                url: "/api/student",
                method: "POST",
                body: student
           }),
           invalidateTags: ["Students"]
        }),
        deleteStudent: build.mutation({
            query: ({id}) => ({
                url: "/api/student",
                method: "DELETE",
                body: {id: id}
            }),
            invalidateTags: ["Students"]
        })
    })
})

export const {useGetStudentsQuery, useAddStudentMutation, useDeleteStudentMutation} = studentsApiSlice