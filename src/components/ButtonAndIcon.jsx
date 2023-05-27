export default function ButtonAndIcon({icon, text}) {
    return (
        <button className="flex bg-purple-500 text-white px-8 py-3 rounded-full gap-4 items-center">
            <img src={icon}></img>
            {text}
        </button>
    )
}