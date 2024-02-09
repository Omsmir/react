import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { login,logout } from "../components/store";
const Login = () => {
    const [newusername,setUsername] = useState("")

    const username = useSelector((state: any) => state.user.value.username)
    const Dispatch = useDispatch()

    return ( <div className="Login">
        <h1>Welcome To the Login Page {username}</h1>
        <input type="text" onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={()=> Dispatch(login({username: newusername}))}>Log in</button>
        <button onClick={() => Dispatch(logout())}>Log out</button>
    </div> );
}
 
export default Login;