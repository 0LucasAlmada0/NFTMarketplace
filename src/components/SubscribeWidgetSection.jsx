import InputComponent from "./shared/InputComponent";

export default function SubscribeWidgetSection() {
  return (
    <section className="py-20 mx-[10%]">
      <div className="bg-[#3B3B3B] flex rounded-3xl gap-[10%]">
        <img
          className="my-16 ml-16 rounded-3xl w-[40%]"
          src="https://picsum.photos/600"
        />
        <div className="m-auto items-center ml-[10%]">
          <h2 className="text-4xl font-semibold">Join Our Weekly Digest</h2>
          <p className="text-2xl mt-3 mb-10 w-[60%]">
            Get Exclusive Promotions & Updates Straight To Your Inbox
          </p>
          <InputComponent icon={"https://picsum.photos/20"} placeholder={"Enter Your Email Here"} buttonText={"Subscribe"}/>
        </div>
      </div>
    </section>
  );
}
