import { useState } from "react"
import useAuth from "../hooks/useAuth"
import api from "../services/api"
import { UploadImage } from "./ImageUpload"

export default function CreateComment({getPosts}){
    const {user} = useAuth()
    const [newPost, setNewPost] = useState({title: "", description: "", type: "", photo: null, author: {_id: user._id, name: user.name}})
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
                if(newPost.photo){
                    const formData = new FormData();
                    formData.append("file", newPost.photo)
    
                    const response = await api.post('/uploadImage', formData, {
                        headers: {
                        'Content-Type': 'multipart/form-data',
                        },
                    })
                    await api.post("/createComment", {...newPost, photo: response.data.url})
                }else{
                    await api.post("/createComment", newPost)
                }
                getPosts()
                setNewPost({...newPost, title: "", description: "", type: "", photo:null})
            }catch(e){
                console.log("error", e)
            }
        }
    }

    return (
        <div className="flex flex-col rounded-lg gap-2 w-4/5 p-4 bg-zinc-200 shadow-md">
            <h1 className="font-bold text-lg">
                Crie um post aqui
            </h1>
            <input type="text" value={newPost.title} onChange={(e)=>{setNewPost({...newPost, title: e.target.value})}} placeholder="Titulo" required={true} className="w-full p-2 rounded-md bg-zinc-300 outline-blue-500"/>
            <input type="text" value={newPost.description} onChange={(e)=>{setNewPost({...newPost, description: e.target.value})}} placeholder="Descrição" required={true} className="w-full h-20 p-2 rounded-md bg-zinc-300 outline-blue-500"/>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-row m-2 gap-4 items-center">
                    <button onClick={()=>setNewPost({...newPost, type: 'Elogio'})} className={`p-1 rounded-md font-bold text-sm ${newPost.type == 'Elogio'?"bg-green-500 text-white":"border-solid border-2 text-green-500 border-green-500"}`}>
                        #Elogio
                    </button>
                    <button onClick={()=>setNewPost({...newPost, type: 'Sugestao'})} className={`p-1 rounded-md font-bold text-sm ${newPost.type == 'Sugestao'?"bg-yellow-500 text-white":"border-solid border-2 text-yellow-500 border-yellow-500"}`}>
                        #Sugestão
                    </button>
                    <button onClick={()=>setNewPost({...newPost, type: 'Critica'})} className={`p-1 rounded-md font-bold text-sm ${newPost.type == 'Critica'?"bg-red-500 text-white":"border-solid border-2 text-red-500 border-red-500"}`}>
                        #Critica
                    </button>
                    <UploadImage newPost={newPost} setNewPost={setNewPost}/>
                </div>
                <button onClick={()=>handleCreatePost()} className="h-12 w-24 rounded-md bg-blue-500 text-white font-bold text-sm">
                    Criar post
                </button>
            </div>
        </div>
    )
}