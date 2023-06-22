import Image from "next/image"

export default function ResponseComment({item}){

    return (
        <div className="flex flex-col rounded-lg gap-3 w-4/5 p-4 bg-zinc-200 shadow-md">
            <p>
                {item.comment}
            </p>
            <div className="flex flex-row justify-end">
                <div className="flex flex-row">
                    <span className="text-sm">
                        Postado por
                        <p className="font-semibold text-blue-500">
                            {item.author_name}
                        </p>
                    </span>
                </div>
            </div>
        </div>
    )
}