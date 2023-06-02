import { useState } from "react"
import useAuth from "../hooks/useAuth"
import api from "../services/api"

export default function CreateComment(){
    const {user} = useAuth()
    const [newPost, setNewPost] = useState({title: "", description: "", type: "", author: user._id})

    async function handleCreateNewComment(){
        try{
            await api.post("/createComment", newPost)
        }catch(e){
            console.log("error")
        }
    }

    return (
        <div className="flex flex-col rounded-lg gap-2 w-4/5 p-4 bg-zinc-200 shadow-md">
            <h1 className="font-bold text-lg">
                Crie um post aqui
            </h1>
            <input type="text" onChange={(e)=>{setNewPost({...newPost, title: e.target.value})}} placeholder="Titulo" required={true} className="w-full p-2 rounded-md bg-zinc-300 outline-blue-500"/>
            <input type="text" onChange={(e)=>{setNewPost({...newPost, description: e.target.value})}} placeholder="Descrição" required={true} className="w-full h-20 p-2 rounded-md bg-zinc-300 outline-blue-500"/>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-4 items-center">
                    <button onClick={()=>setNewPost({...newPost, type: 'Elogio'})} className={`p-1 rounded-md font-bold text-sm ${newPost.type == 'Elogio'?"bg-green-500 text-white":"border-solid border-2 text-green-500 border-green-500"}`}>
                        #Elogio
                    </button>
                    <button onClick={()=>setNewPost({...newPost, type: 'Sugestao'})} className={`p-1 rounded-md font-bold text-sm ${newPost.type == 'Sugestao'?"bg-yellow-500 text-white":"border-solid border-2 text-yellow-500 border-yellow-500"}`}>
                        #Sugestão
                    </button>
                    <button onClick={()=>setNewPost({...newPost, type: 'Critica'})} className={`p-1 rounded-md font-bold text-sm ${newPost.type == 'Critica'?"bg-red-500 text-white":"border-solid border-2 text-red-500 border-red-500"}`}>
                        #Critica
                    </button>
                </div>
                <button onClick={handleCreateNewComment} className="p-3 rounded-md bg-blue-500 text-white font-bold text-sm">
                    Criar post
                </button>
            </div>
        </div>
    )
}