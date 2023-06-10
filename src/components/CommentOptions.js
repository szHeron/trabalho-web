import { useState } from "react"
import * as Popover from "@radix-ui/react-popover"
import Image from "next/image"
import copy from "copy-to-clipboard"
import useAuth from "../hooks/useAuth"
import share from "../assets/share.svg"
import trash from "../assets/trash.svg"

export function CommentOptions({id, author, setOpenEditModal, setOpenDeleteModal}){
    const [ copyState, setCopyState ] = useState(false)
    const { user } = useAuth()

    function VerifyUserIsAuthorOrAdmin(){
        if(user._id === author._id)
            return true
        else
            return false
    }

    function CopyUrlPost(){
        copy(`http://localhost:3000/comment?id=${id}`);
        setCopyState(true);
    }

    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <button type="button">
                    <svg width={28} height={28} fill="#000" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z"/></svg>
                </button>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content className="flex flex-col bg-[#2f80ed] text-[#a4a4a4] w-10/100 rounded-lg p-3">
                    <button   
                        className="flex flex-row bg-white items-center justify-start font-bold w-full py-3 px-4 rounded-lg cursor-pointer hover:text-[#2f80ed]"
                        onClick={CopyUrlPost}
                    >
                        {
                            copyState?(
                                <span className="font-light text-green-500">Link copiado com sucesso!</span>
                            ):(
                                <>
                                    <Image className="w-5 h-5 mr-3" src={share} alt="Compartilhar post"/>
                                    <p>Compartilhar</p>
                                </>
                            )}
                    </button>
                    {
                        VerifyUserIsAuthorOrAdmin && (
                            <>
                                <button onClick={()=>setOpenEditModal(true)} className="flex flex-row bg-white items-center justify-start font-bold w-full mt-2 py-3 px-4 rounded-lg cursor-pointer hover:text-[#2f80ed]">
                                    <svg fill="#a4a4a4" className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M14.078 7.061l2.861 2.862-10.799 10.798-3.584.723.724-3.585 10.798-10.798zm0-2.829l-12.64 12.64-1.438 7.128 7.127-1.438 12.642-12.64-5.691-5.69zm7.105 4.277l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z"/></svg>
                                    <p>Editar</p>
                                </button>
                                <button onClick={()=>setOpenDeleteModal(true)} className="flex flex-row bg-white items-center justify-start font-bold w-full mt-2 py-3 px-4 rounded-lg cursor-pointer hover:text-[#2f80ed]">
                                    <Image className="w-5 h-5 mr-3" src={trash} alt="Deletar post"/>
                                    <p>Apagar</p>
                                </button>
                            </>
                        )
                    }
                    <Popover.Arrow width="12px" height="12px" fill="#2f80ed"/>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}