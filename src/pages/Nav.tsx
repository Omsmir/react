import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";



const Nav = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate()

   const Signout = async () =>{
    await signOut(auth)
    navigate("/login")
   }
    return ( <div>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/contact"}>contact</Link></li>
            {!user ? 
            <li><Link to={"/login"}>login</Link></li> : <>
             <li><Link to={"/create"}>create post</Link></li>
            <li><Link to={"/getpost"}>posts</Link></li> </>}

        </ul>
    <div className="left">
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} alt="" />
    {user?  <button onClick={() => setInterval(() => {Signout()},2000)}>Log Out</button> : "" }
    </div>
    </div> );
}
 
export default Nav;