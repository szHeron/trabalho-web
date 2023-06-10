import { useEffect, useState } from "react"
import Header from "../components/Header"
import CommentCard from "../components/CommentCard"
import CreateComment from "../components/CreateComment"
import useAuth from "../hooks/useAuth"
import api from "../services/api"

export default function Home() {
  const [posts, setPosts] = useState([])
  const { user, GetLoggedInUserFromCookie } = useAuth()

  useEffect(()=>{
    async function getPosts(){
      const response = await api.get("/")
      setPosts(response.data)
    }

    getPosts()

  },[posts])

  useEffect(()=>{
    GetLoggedInUserFromCookie()
  }, [])

  return (
    <div>
      <Header/>
      <div className="flex flex-col gap-4 items-center pt-4 pb-4">
        {user && <CreateComment/>}
        {posts.map((item)=>{
          return <CommentCard key={item._id} {...item} setPosts={setPosts} posts={posts}/>
        })}
      </div>
    </div>
  )
}
