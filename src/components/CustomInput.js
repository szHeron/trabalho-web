export default function CustomInput({placeholder, required, icon}){
    return (
        <div class="relative">
            <input type="text" placeholder={placeholder} required={required} class="bg-zinc-200 w-full p-2 rounded-md focus:bg-zinc-300 outline-blue-500"/>
            <span class="absolute inset-y-0 right-0 flex items-center px-3">
                {icon}
            </span>
        </div> 
    )
}