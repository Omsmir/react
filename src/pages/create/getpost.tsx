import { getDocs ,collection} from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import Posts from "./post";

export interface Post {
    id: string;
    userId:string;
    title:string;
    description:string;
    username:string;
    email:string
    photoUrl:string
}


const GetPost = () => {
    const [newPost,getNewPost] = useState <Post[] | null> (null)

    const postRef = collection (db,"posts")

    const getPosts = async () => {
       const data = await getDocs(postRef)

      getNewPost(data.docs.map((doc ) => ({...doc.data(), id : doc.id})) as Post[])  
    }

  useEffect(() => {
getPosts()
  },[])
    return ( 
    <div className="postCon">{newPost?.map((post) => 
 <Posts post={post} id={post.id} />
)}
    </div>
     );
}
 
export default GetPost;