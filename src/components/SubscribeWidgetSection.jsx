import ButtonAndIcon from "./shared/ButtonAndIcon";

export default function SubscribeWidgetSection() {
  return (
    <section className="py-20 mx-[10%]">
      <div className="bg-[#3B3B3B] h-[430px] flex rounded-3xl gap-[25%]">
        <img
          className="my-16 ml-16 rounded-3xl"
          src="https://picsum.photos/450"
        />
        <div className="m-auto items-center mr-52">
          <h2 className="text-4xl font-bold">Join Our Weekly Digest</h2>
          <p className="text-2xl mt-3 mb-10">
            Get Exclusive Promotions & Updates Straight To Your Inbox
          </p>
          <div className="flex">
            <input
              className="absolute z-0 p-3 w-72 rounded-3xl text-black pl-4 pr-24"
              placeholder="Enter Your Email Here"
            ></input>
            <div className="z-10 relative left-52">
              <ButtonAndIcon
                icon={"https://picsum.photos/20"}
                text={"Subscribe"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
