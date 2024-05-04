import { jwtDecode } from 'jwt-decode'

const DecodeToken = () => {
    const token = localStorage.getItem("token")
    
    
    if (token!=undefined) {
        const userDecode = jwtDecode(token)
        const {roles} = userDecode
        const{_id}= userDecode
        const {firstName} = userDecode
        const {lastName} = userDecode
        const fullname = firstName +' '+ lastName
        //const fullname = firstName +' '+ lastName
        console.log(`id = ${_id}, firstname = ${fullname}`)
        return {roles, _id, fullname}
    }
    return null
}

export default DecodeToken