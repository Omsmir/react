import { auth, provider} from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import {  useNavigate } from "react-router-dom";


const LoginJ = () => {


    const navigate = useNavigate()
  const SignWithGoogle = async () => {
    await signInWithPopup(auth,provider)

    navigate("/getpost")
  }
    return (  
        <div className="Home">
            <h1>Welcome to the login page</h1>
            <button className="login" onClick={SignWithGoogle}>Sign in with google</button>
        </div>
    );
}
 
export default LoginJ;