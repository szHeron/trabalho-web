import { useState } from "react";
import api from "../services/api"

export function EditCard({setOpenEditModal, post, getPosts, setPost}){
    const [editPost, setEditPost] = useState({...post})
    const [error, setError] = useState("")

    function validation(){
        if(editPost.title.length < 3){
            setError("Insira um titulo válido!")
            return false
        }else if(editPost.description.length < 3){
            setError("Insira uma descrição válida!")
            return false
        }else if(editPost.type.length < 3){
            setError("Escolha qual o tipo da postagem!")
            return false
        }
        return true
    }

    async function handleEditComment(){
        if(validation()){
            try{
                await api.put(`/comment/${editPost._id}`, editPost)
                if(!getPosts){
                    setPost(editPost)
                }else{
                    getPosts()
                }
              
                setOpenEditModal(false)
            }catch(e){
                console.log("error")
            }
        }
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 w-4/5 md:w-1/2">
                <h2 className="text-lg font-bold mb-4">Edite o conteúdo</h2>
                <input type="text" value={editPost.title} onChange={(e)=>{setEditPost({...editPost, title: e.target.value})}} placeholder="Titulo" required={true} className="w-full p-2 rounded-md bg-zinc-300 outline-blue-500"/>
                <input type="text" value={editPost.description} onChange={(e)=>{setEditPost({...editPost, description: e.target.value})}} placeholder="Descrição" required={true} className="w-full h-20 mt-2 p-2 rounded-md bg-zinc-300 outline-blue-500"/>
                <div className="flex flex-row justify-between mt-2">
                    <div className="flex flex-row gap-4 items-center">
                        <button onClick={()=>setEditPost({...editPost, type: 'Elogio'})} className={`p-1 rounded-md font-bold text-sm ${editPost.type == 'Elogio'?"bg-green-500 text-white":"border-solid border-2 text-green-500 border-green-500"}`}>
                            #Elogio
                        </button>
                        <button onClick={()=>setEditPost({...editPost, type: 'Sugestao'})} className={`p-1 rounded-md font-bold text-sm ${editPost.type == 'Sugestao'?"bg-yellow-500 text-white":"border-solid border-2 text-yellow-500 border-yellow-500"}`}>
                            #Sugestão
                        </button>
                        <button onClick={()=>setEditPost({...editPost, type: 'Critica'})} className={`p-1 rounded-md font-bold text-sm ${editPost.type == 'Critica'?"bg-red-500 text-white":"border-solid border-2 text-red-500 border-red-500"}`}>
                            #Critica
                        </button>
                    </div>
                </div>
                {error&&<p className="text-red-500">{error}</p>}
                <div className="flex flex-row justify-between mt-4">
                    <button onClick={()=>setOpenEditModal(false)} className="border-2 border-red-500 text-red-500 font-bold p-2 rounded hover:bg-red-500 hover:text-white">
                        Fechar
                    </button>
                    <button onClick={()=>handleEditComment()} className="p-2 rounded-md bg-blue-500 text-white font-bold text-sm">
                        Editar post
                    </button>
                </div>
            </div>
        </div>
    )
}