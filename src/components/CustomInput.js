export default function CustomInput(props){
    return (
        <div className="relative">
            <input type="text" {...props} className="bg-zinc-200 w-full p-2 rounded-md focus:bg-zinc-300 outline-blue-500"/>
            <span className="absolute inset-y-0 right-0 flex items-center px-3">
                {props.icon}
            </span>
        </div> 
    )
}