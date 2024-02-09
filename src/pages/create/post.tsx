import { auth, db } from "../../config/firebase";
import { addDoc,collection,getDocs,deleteDoc,where,query, doc } from "firebase/firestore";
import {  Post as ipost } from "./getpost";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface Props {
    post : ipost
    id: string
}

interface Like {
    userId : string;
}
const Posts = (props : Props) => {
    const [user] = useAuthState(auth)
    const {post} = props
    const likeRef = collection(db ,"likes")
    const [likes,fetchLikes] = useState<Like[] | null>(null)


const userLikes = query(likeRef,where("postId" , "==" , post.id))
    const hasLiked = likes?.find((like) => like.userId === user?.uid)

    const addLikes = async () =>{

        try {
        await addDoc(likeRef,{
            userId:user?.uid,
            postId:post.id
        })

        if(user)
        fetchLikes((prev) => prev ? [...prev,{userId: user?.uid}] : [{userId: user?.uid}])}
    catch (err){
        console.log(err)
    }
    }

    const deleteLikes = async () =>{

        try {
      
            const likesTodelete = query(likeRef,where("postId","==",post.id),where("userId","==",user?.uid))

            const result = await getDocs(likesTodelete)


            const deleteIt = doc(db,"likes",result.docs[0].id)

            await deleteDoc(deleteIt)

        if(user)
        fetchLikes((prev) => prev && prev.filter((ele) => ele.userId !== user?.uid) )
        }
    catch (err){
        console.log(err)
    }
    }


    

    const getLikes = async () => {
        const data = await getDocs(userLikes)

        fetchLikes(data.docs.map((doc) => ({userId: doc.data().userId})) as Like[])
    }



    useEffect(() => {getLikes()},[])


    return ( 
          <div className="child">
            <img src={post.photoUrl} alt="user" />
           <h1>{post.description}</h1>
            <p>{post.username}</p>
            <p>{post.title}</p>
            <p>{post.email}</p>
            <p>{likes?.length}</p>
            <button onClick={hasLiked ? deleteLikes : addLikes}>{hasLiked ? <>dislike</> : <>Like</>}</button>
            </div> 
     );
}
 
export default Posts;