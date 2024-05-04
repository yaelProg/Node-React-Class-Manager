import { useFunctionTokenMutation } from "./authApiSlice"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const PrivateRoute = ()=>{
 const navigate = useNavigate()

   const CheckToken = async()=>{
    // const [TokenFunc, {isError, error, isSuccess,isLoading,data}] =
    // useFunctionTokenMutation()
    const ans = await axios("http://localhost:9876/api/functionToken/" + localStorage.getItem("token"))
    console.log(ans.data.ans)
    if (ans.data.ans==false){
        navigate("/login")
    }
   }
    return{CheckToken}
}
export default PrivateRoute
