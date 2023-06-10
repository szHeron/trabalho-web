import Link from "next/link"
import useAuth from "../hooks/useAuth"

export default function Header(){
    const { user } = useAuth()
    return (
        <div className="flex flex-row bg-[#2f80ed] justify-between items-center w-screen p-3 shadow-md">
            <Link href='/' className="font-bold text-white text-lg">
                FORUFC
            </Link>
            {
                user?
                    <p className="font-bold text-white text-lg px-6">
                        {user.name}
                    </p>
                    :
                    <Link className="bg-white font-bold text-[#2f80ed] p-2 px-6 rounded-lg mr-8" href='/signin'>
                        Entrar
                    </Link>
                }
            
        </div>
    )
}