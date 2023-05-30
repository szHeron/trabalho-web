import CommentCard from "@/components/CommentCard"
import Header from "@/components/Header"
import ResponseComment from "@/components/ResponseComment"
import CreateResponse from "@/components/CreateResponse"

export default function Comment() {
  return (
    <div>
      <Header/>
      <div className="flex flex-col items-center mt-4">
        <CommentCard/>
      </div>
      <div className="flex flex-row items-center justify-center mt-4">
        <span class="h-0.5 w-[40vw] bg-black mr-2"></span>
        <h1>
          Comentarios
        </h1>
        <span class="h-0.5 w-[40vw] bg-black ml-2"></span>
      </div>
      <div className="flex flex-col gap-4 items-center pt-4 pb-4">
        <CreateResponse/>
        <ResponseComment/>
        <ResponseComment/>
        <ResponseComment/>
        <ResponseComment/>
        <ResponseComment/>
      </div>
    </div>
  )
}
