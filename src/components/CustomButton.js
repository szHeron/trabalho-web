export default function CustomButton(props){
    return (
        <button {...props} className="bg-blue-500 font-bold p-3 rounded-md text-white">
            {props.children}
        </button>
    )
}