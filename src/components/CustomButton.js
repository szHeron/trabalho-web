export default function CustomButton({children}){
    return (
        <button className="bg-blue-500 font-bold p-3 rounded-md text-white">
            {children}
        </button>
    )
}