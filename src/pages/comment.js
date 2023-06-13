import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import useAuth from "../hooks/useAuth"
import api from "../services/api"
import CommentCard from "../components/CommentCard"
import Header from "../components/Header"
import ResponseComment from "../components/ResponseComment"
import CreateResponse from "../components/CreateResponse"

export default function Comment() {
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState({})
  const { user, GetLoggedInUserFromCookie } = useAuth()
  const router = useRouter()
  const { query } = router

  useEffect(()=>{
    async function getPost(){
      setLoading(true)
      const response = await api.get(`/comment/${query.id}`)
      setPost(response.data)
      setLoading(false)
    }
    if(query.id){
      GetLoggedInUserFromCookie()
      getPost()
    }
      
  },[query.id])

  if(loading){  
    return <p>Carregando</p>
  }

  return (
    <div>
      <Header/>
      <div className="flex flex-col items-center mt-4">
        <CommentCard post={post} setPost={setPost}/>
      </div>
      <div className="flex flex-row items-center justify-center mt-4">
        <span className="h-0.5 w-[40vw] bg-black mr-2"></span>
        <h1>
          Comentarios
        </h1>
        <span className="h-0.5 w-[40vw] bg-black ml-2"></span>
      </div>
      <div className="flex flex-col gap-4 items-center pt-4 pb-4">
        {user && <CreateResponse user={user} post={post}/>}
        {post.comments.map((item, index)=>{
          return <ResponseComment key={index} item={item}/>
        })}
      </div>
    </div>
  )
}
