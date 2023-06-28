import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import useAuth from "../hooks/useAuth"
import UpdatePost from "../utils/postLike"
import { CommentOptions } from "./CommentOptions"
import { EditCard } from "./EditCard"
import { DeleteModal } from "./ModalDelete"

export default function CommentCard({post, posts, setPost, setPosts, getPosts}){
    const { user } = useAuth()
    const [ openEditModal, setOpenEditModal ] = useState(false)
    const [ openDeleteModal, setOpenDeleteModal ] = useState(false)

    function handleLikedPost(){
        if(post.likes.indexOf(user._id) > -1){
            const newLikes = post.likes.filter((item) => item != user._id)
            UpdatePost({...post, likes: newLikes})
            if(!setPosts){
                setPost({...post, likes: newLikes})
            }else{
                const newPosts = posts.filter(item => item._id != post._id)
                setPosts([...newPosts, {...post, likes: newLikes}].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)))
            }
        }else{
            UpdatePost({...post, likes: [...post.likes, user._id]})
            if(!setPosts){
                setPost({...post, likes: [...post.likes, user._id]})
            }else{
                const newPosts = posts.filter(item => item._id != post._id)
                setPosts([...newPosts, {...post, likes: [...post.likes, user._id]}].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)))
            }
        }
    }

    return (
        <div className="flex flex-col rounded-lg gap-3 w-4/5 p-4 bg-zinc-200 shadow-md">
            <div className="flex flex-row justify-between items-center">
                <Link href={{
                    pathname: '/comment',
                    query: { id: post._id },
                }}
                    className="flex flex-row gap-2 items-center">
                    <h1 className="font-bold text-lg">
                        {post.title}
                    </h1>
                    <div className={`p-1 rounded-md text-white font-bold text-sm ${post.type === "Elogio"?"bg-green-500":post.type === "Critica"?"bg-red-500":"bg-yellow-500"}`}>
                        #{post.type}
                    </div>
                </Link>
                <CommentOptions setOpenDeleteModal={setOpenDeleteModal} setOpenEditModal={setOpenEditModal} id={post._id} author={post.author}/>
            </div>
            <div>
                <p>
                    {post.description}
                </p>
            </div>
            {post.photo && (
                <div className="flex w-full justify-center items-center">
                    <Image height={512} width={512} alt="Image do post" src={post.photo}/>
                </div>
            )}
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-3">
                    <button className="flex flex-row" disabled={!user} onClick={handleLikedPost}>
                        {
                            post.likes.indexOf(!user?"":user._id) >-1 ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f34336" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
                                :
                            <svg width="24" height="24" fill="#808080" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fillRule="nonzero"/></svg>
                                
                        }
                        <p>{post.likes.length}</p>
                    </button>
                    <button disabled={!user} className="flex flex-row">
                        <svg width="24" height="24" fill="#808080" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007m0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007"/></svg>
                        <p>{post.comments.length}</p>
                    </button>
                </div>
                <span className="text-sm">
                    Postado por
                    <p className="font-semibold text-blue-500">
                        {post.author.name}
                    </p>
                </span>

            </div>
            {openDeleteModal && <DeleteModal setOpenDeleteModal={setOpenDeleteModal} id={post._id} getPosts={getPosts}/>}
            {openEditModal && <EditCard setOpenEditModal={setOpenEditModal} post={post} getPosts={post.getPosts} setPost={setPost}/>}
        </div>
    )
}