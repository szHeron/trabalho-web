import { useState } from "react"
import api from "../services/api";

export default function CreateResponse({post, user}){
    const [newComment, setNewComment] = useState({comment: '', author_name: user.name})

    async function handleCreateNewResponse(){
        post.comments.push(newComment)
        try{
            api.put(`/comment/${post._id}`, post)
        }catch(e){
            throw new Error("Erro ao públicar comentário.");
        }
    }

    return (
        <div className="flex flex-col rounded-lg gap-2 w-4/5 p-4 bg-zinc-200 shadow-md">
            <h1 className="font-bold text-lg">
                Comente aqui
            </h1>
            <textarea onChange={(e)=>setNewComment({...newComment, comment: e.target.value})} type="text" placeholder="Comentario" required={true} className="w-full h-20 p-2 rounded-md bg-zinc-300 outline-blue-500"/>
            <button onClick={handleCreateNewResponse} className="p-3 rounded-md bg-blue-500 text-white font-bold text-sm">
                Criar comentario
            </button>
        </div>
    )
}