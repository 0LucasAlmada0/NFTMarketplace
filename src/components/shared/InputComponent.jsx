import ButtonAndIcon from "./ButtonAndIcon";

export default function InputComponent() {
  return (
    <div className="flex">
      <input
        className="absolute z-0 p-3 w-72 rounded-3xl text-black pl-4 pr-24 focus:outline-none"
        placeholder="Enter Your Email Here"
      ></input>
      <div className="z-10 relative left-52">
        <ButtonAndIcon icon={"https://picsum.photos/20"} text={"Subscribe"} />
      </div>
    </div>
  );
}
