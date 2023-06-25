import { useState } from "react"
import Link from "next/link";
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"

export default function RecoverPassword(){
    const [user, setUser] = useState({email: "", password: ""})
    const [error, setError] = useState("")

    return (
        <div className="flex flex-row w-screen h-screen">
            <aside className="flex w-0 md:w-1/2 bg-linear-background justify-center items-center">
                <h1 className="text-white font-bold text-4xl">Recuperar senha</h1>
            </aside>
            <main className="flex flex-col w-full md:w-1/2 justify-center items-center">
                <h1 className="font-bold text-3xl">Olá</h1>
                <p className="font-thin text-md mb-12">Preencha os campos para uma nova senha</p>
                <div className="flex flex-col gap-3 w-4/5 md:w-2/5 justify-between">
                    <CustomInput onChange={(e)=>{setUser({...user, email: e.target.value})}} placeholder="Email" required icon={<svg fill="rgb(161 161 170)" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>}/>
                    <CustomInput type="password" onChange={(e)=>{setUser({...user, password: e.target.value})}} placeholder="Nova Senha" required icon={<svg fill="rgb(161 161 170)" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M6 8v-2c0-3.313 2.686-6 6-6 3.312 0 6 2.687 6 6v2h-2v-2c0-2.206-1.795-4-4-4s-4 1.794-4 4v2h-2zm15 2v14h-18v-14h18zm-2 2h-14v10h14v-10z"/></svg>}/>
                    <CustomInput type="password" onChange={(e)=>{setUser({...user, password: e.target.value})}} placeholder="Repita a nova Senha" required icon={<svg fill="rgb(161 161 170)" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M6 8v-2c0-3.313 2.686-6 6-6 3.312 0 6 2.687 6 6v2h-2v-2c0-2.206-1.795-4-4-4s-4 1.794-4 4v2h-2zm15 2v14h-18v-14h18zm-2 2h-14v10h14v-10z"/></svg>}/>
                    {error&&<p className="text-red-500">{error}</p>}
                    <CustomButton>Trocar</CustomButton>           
                </div>
                <Link href="signin" className="mt-12 hover:cursor-pointer">Deseja acessar sua conta? <span className="text-blue-500">Acesse aqui.</span></Link>
            </main>
        </div>
    )
}