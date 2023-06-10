import { useState } from "react"
import useAuth from "../hooks/useAuth"
import api from "../services/api"

export default function CreateComment({getPosts}){
    const {user} = useAuth()
    const [newPost, setNewPost] = useState({title: "", description: "", type: "", author: {_id: user._id, name: user.name}})
    const [error, setError] = useState("")

    function validation(){
        if(newPost.title.length < 3){
            setError("Insira um titulo válido!")
            return false
        }else if(newPost.description.length < 3){
            setError("Insira uma descrição válida!")
            return false
        }else if(newPost.type.length < 3){
            setError("Escolha qual o tipo da postagem!")
            return false
        }
        return true
    }

    async function handleCreatePost(){
        if(validation()){
            try{
                await api.post("/createComment", newPost)
                getPosts()
            }catch(e){
                console.log("error")
            }
        }
    }

    return (
        <div className="flex flex-col rounded-lg gap-2 w-4/5 p-4 bg-zinc-200 shadow-md">
            <h1 className="font-bold text-lg">
                Crie um post aqui
            </h1>
            <input type="text" onChange={(e)=>{setNewPost({...newPost, title: e.target.value})}} placeholder="Titulo" required={true} className="w-full p-2 rounded-md bg-zinc-300 outline-blue-500"/>
            <input type="text" onChange={(e)=>{setNewPost({...newPost, description: e.target.value})}} placeholder="Descrição" required={true} className="w-full h-20 p-2 rounded-md bg-zinc-300 outline-blue-500"/>
            {error && <p className="text-red-500">{error}</p>}
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
                <button onClick={()=>handleCreatePost()} className="p-3 rounded-md bg-blue-500 text-white font-bold text-sm">
                    Criar post
                </button>
            </div>
        </div>
    )
}