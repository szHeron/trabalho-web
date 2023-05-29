import Header from "@/components/Header"
import CommentCard from "@/components/CommentCard"

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="flex flex-col gap-4 items-center pt-4 pb-4">
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
      </div>
    </div>
  )
}
