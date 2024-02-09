import {useForm} from "react-hook-form"
import  * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useAuthState} from 'react-firebase-hooks/auth'
import { auth ,db } from "../../config/firebase";
import {addDoc , collection} from 'firebase/firestore'

interface prop {
    title: string;
    description: string;
}


const CreatePost = () => {

    const schema = yup.object().shape({
        title: yup.string().required("please Add a Title"),
        description: yup.string().required("please Add a Description"),
    })

const {register , handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(schema)
})

const [user] = useAuthState(auth)

console.log(user)
const postRef = collection(db,"posts")

const onSubmit = async (data : prop) => {
    await addDoc(postRef,{
        title: data.title,
        description: data.description,
        userId:user?.uid,
        username:user?.displayName,
        email:user?.email,
        photoUrl:user?.photoURL,
    })
} 

return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Title"{...register("title")}/>
        <textarea {...register("description")}></textarea>
        <input type="submit" value="submit" />
    </form>
    
     );
}
 
export default CreatePost;