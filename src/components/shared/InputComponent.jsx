import ButtonAndIcon from "./ButtonAndIcon";

export default function InputComponent({placeholder, icon, buttonText}) {
  return (
    <div className="flex">
      <input
        className="absolute z-0 p-3 w-72 rounded-3xl text-black pl-4 pr-24 focus:outline-none"
        placeholder={placeholder}
      ></input>
      <div className="z-10 relative left-52">
        <ButtonAndIcon icon={icon} text={buttonText} />
      </div>
    </div>
  );
}
