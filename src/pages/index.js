import { useEffect, useState } from "react"
import Header from "../components/Header"
import CommentCard from "../components/CommentCard"
import CreateComment from "../components/CreateComment"
import useAuth from "../hooks/useAuth"
import api from "../services/api"

export default function Home() {
  const [posts, setPosts] = useState([])
  const { user, GetLoggedInUserFromCookie } = useAuth()

  async function getPosts(){
    const response = await api.get("/")
    const postByCreatedOrder = response.data.sort((a, b) => a.createdAt - b.createdAt)
    setPosts(postByCreatedOrder)
  }

  useEffect(()=>{
    getPosts()
    GetLoggedInUserFromCookie()
  },[])

  return (
    <div>
      <Header/>
      <div className="flex flex-col gap-4 items-center pt-4 pb-4">
        {user && <CreateComment getPosts={getPosts}/>}
        {posts.map((item)=>{
          return <CommentCard key={item._id} post={item} setPosts={setPosts} posts={posts} getPosts={getPosts}/>
        })}
      </div>
    </div>
  )
}
