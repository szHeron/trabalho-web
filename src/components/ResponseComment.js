import Image from "next/image"

export default function ResponseComment({item}){

    return (
        <div className="flex flex-col rounded-lg gap-3 w-4/5 p-4 bg-zinc-200 shadow-md">
            <p>
                {item.comment}
            </p>
            <div className="flex flex-row justify-end">
                <div className="flex flex-row">
                    <div className="h-10 w-10 relative mr-4">
                        <Image
                            src="https://staticg.sportskeeda.com/editor/2023/02/ad47e-16765790074089-1920.jpg"
                            fill
                            alt="Foto do autor"
                            className="rounded-full"
                        />
                    </div>
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