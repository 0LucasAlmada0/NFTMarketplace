import HowItWorksCard from "./HowItWorksCard";

export default function HowItWorksSection() {
  return (
    <section className="py-10 mx-[10%]">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold">How it Works</h1>
        <p className="text-2xl ">Find Out How To Get Started</p>
      </div>
      <div className="flex justify-between">
        <HowItWorksCard
          title={"Setup Your Wallet"}
          text={
            "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
          }
          cardImage={"https://www.picsum.photos/250"}
        />
        <HowItWorksCard
          title={"Create Collection"}
          text={
            "Upload your work and setup your collection. Add a description, social links and floor price."
          }
          cardImage={"https://www.picsum.photos/250"}
        />
        <HowItWorksCard
          title={"Start Earning"}
          text={
            "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
          }
          cardImage={"https://www.picsum.photos/250"}
        />
      </div>
    </section>
  );
}
