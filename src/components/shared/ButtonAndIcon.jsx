import { Link } from "react-router-dom"

export default function ButtonAndIcon({icon, text, link}) {
    return (
        <Link to={link}>
            <button className="focus:outline-none flex bg-[#A259FF] text-white px-8 py-3 rounded-full gap-4 items-center">
                <img src={icon}></img>
                {text}
            </button>
        </Link>
    )
}