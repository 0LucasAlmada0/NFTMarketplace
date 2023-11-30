import { Link } from "react-router-dom";

export default function ButtonAndIcon({ icon, text, link, width}) {
  const buttonStyle = `focus:outline-none flex bg-[#A259FF] text-white px-8 py-3 rounded-full gap-4 items-center ${
    width ? `w-${width}` : ""
  }`;

  return (
    <Link to={link}>
      <button className={buttonStyle}>
        <img src={icon}></img>
        {text}
      </button>
    </Link>
  );
}
