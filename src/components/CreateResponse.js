import { useState } from "react"

export default function CreateResponse(){
    const [newPost, setNewPost] = useState({title: '', decription: '', type: ''})

    return (
        <div className="flex flex-col rounded-lg gap-2 w-4/5 p-4 bg-zinc-200 shadow-md">
            <h1 className="font-bold text-lg">
                Comente aqui
            </h1>
            <input type="text" placeholder="Comentario" required={true} class="w-full h-20 p-2 rounded-md bg-zinc-300 outline-blue-500"/>
            <button className="p-3 rounded-md bg-blue-500 text-white font-bold text-sm">
                Criar comentario
            </button>
        </div>
    )
}