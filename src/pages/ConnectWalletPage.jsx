import ButtonAndIcon from "../components/shared/ButtonAndIcon";
export default function ConnectWalletPage() {
  return (
    <section className="">
      <div className="flex gap-16">
        <div>
          <img src="https://picsum.photos/600/650"></img>
        </div>
        <div className="w-1/3 my-24">
          <h1 className="text-5xl font-semibold">Connect Wallet</h1>
          <p className="text-xl mt-5">
            Choose a wallet you want to connect. There are several wallet
            providers.
          </p>
          <div className="flex flex-col gap-4 w-2/3 mt-10">
            <ButtonAndIcon
              width={"[100%]"}
              text={"Metamask"}
              icon={"https://picsum.photos/40"}
            />
            <ButtonAndIcon
              width={"[100%]"}
              text={"Wallet Connect"}
              icon={"https://picsum.photos/40"}
            />
            <ButtonAndIcon
              width={"[100%]"}
              text={"Coinbase"}
              icon={"https://picsum.photos/40"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
