import Image from "next/image";
import Dropzone from "react-dropzone"
import PhotoIcon from "../assets/photo.svg";

export function UploadImage({newPost, setNewPost}){
    function handleDeleteSelectImage(e){
        e.stopPropagation();
        setNewPost({...newPost, photo: null})
    }

    return (
        <Dropzone onDrop={acceptedFiles => {
            setNewPost({...newPost, photo: acceptedFiles[0]})
        }}>
            {({getRootProps, getInputProps}) => (
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        newPost.photo?(
                            <div className="flex flex-row relative">
                                <Image height={128} width={128} alt="preview" src={URL.createObjectURL(newPost.photo)}/>
                                <button className="absolute top-0 right-0" onClick={handleDeleteSelectImage}>
                                    <svg fill="#fff" width={24} height={24} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                                </button>
                            </div>
                        ):(
                            <button className="flex flex-row justify-center items-center bg-zinc-500 rounded-md p-1">
                                <Image src={PhotoIcon} alt="Selecione uma foto para o post"/>
                            </button>
                        )
                    }
                </div>
            )}
        </Dropzone>
    )
}