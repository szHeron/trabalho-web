import { usePathname, useRouter } from 'next/navigation'
import api from "../services/api"

export function DeleteModal({setOpenDeleteModal, id, getPosts}){
    const { push } = useRouter()
    const pathname = usePathname()

    async function handleDeleteComment(){
        try{
            await api.delete(`/comment/${id}`)
            setOpenDeleteModal(false)

            if(pathname.startsWith("/comment")){
                push("/")
            }else{
                getPosts()
            }
        }catch(e){
            console.log("error")
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="flex flex-col justify-center items-center bg-white rounded-lg p-8 w-4/5 md:w-1/3">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5.99988H5H21" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h1 className="font-bold text-lg m-4">Excluir post</h1>
                <p>Tem certeza que deseja excluir esse post?</p>
                <div className="flex flex-row justify-center items-center">
                    <button 
                        className="m-10 bg-[#d3d3d3] rounded-md"
                        onClick={()=>{setOpenDeleteModal(false)}}
                    >
                        <p className="text-black font-bold p-3">Cancelar</p>
                    </button>
                    <button 
                        className="m-10 bg-[#E73F5D] rounded-md"
                        onClick={()=>handleDeleteComment()}
                    >
                        <p className="text-white font-bold p-3">Sim, excluir!</p>
                    </button>
                </div>
            </div>
        </div>
    )
}