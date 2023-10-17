import ButtonAndIcon from "./shared/ButtonAndIcon";
import NFTCard from "../components/NFTCard";

export default function HeroSection() {
  return (
    <section className="flex mx-28 my-20 gap-8 justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-6xl font-bold leading-tight">
          Discover Digital art & Collect NFTs
        </h1>
        <p className="my-6 leading-6 text-xl font-extralight">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <ButtonAndIcon
          text={"Get Started"}
          icon={"src/assets/icons/RocketLaunch.png"}
        />
        <div className="flex my-6 gap-14">
          <div>
            <p className="font-bold text-2xl">240k+</p>
            <p className="text-xl font-extralight">Total Sale</p>
          </div>
          <div>
            <p className="font-bold text-2xl">100k+</p>
            <p className="text-xl font-extralight">Auctions</p>
          </div>
          <div>
            <p className="font-bold text-2xl">240k+</p>
            <p className="text-xl font-extralight">Artists</p>
          </div>
        </div>
      </div>
      <div>
        <NFTCard
          cardImagePath={"src/assets/images/ImagePlaceholder.png"}
          title={"Space Walking"}
          avatarName={"Animakid"}
          avatarIconPath={"src/assets/images/Avatar.png"}
        />
      </div>
    </section>
  );
}
