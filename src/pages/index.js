import Header from "../components/Header"
import CommentCard from "../components/CommentCard"
import CreateComment from "../components/CreateComment"
import useAuth from "../hooks/useAuth"

export default function Home() {
  const { user } = useAuth()

  return (
    <div>
      <Header/>
      <div className="flex flex-col gap-4 items-center pt-4 pb-4">
        <CreateComment/>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
      </div>
    </div>
  )
}
