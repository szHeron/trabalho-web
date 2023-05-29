import Link from "next/link"

export default function Header(){
    return (
        <div className="flex flex-row bg-[#2f80ed] justify-between items-center w-screen p-3 shadow-md">
            <Link href='/' className="font-bold text-white text-lg">
                FORUFC
            </Link>
            <Link
                className="bg-white font-bold text-[#2f80ed] p-2 px-6 rounded-lg mr-8"
                href='/signin'

            >
                Entrar
            </Link>
        </div>
    )
}