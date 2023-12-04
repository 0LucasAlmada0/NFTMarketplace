import ButtonAndIcon from "./shared/ButtonAndIcon";
import TrendingCard from "./TrendingCard";

import { getNfts } from "../services/dbService";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [nft, setNft] = useState();

  useEffect(() => {
    async function pegaNft() {
      const nft = await getNfts();
      setNft(nft[1])
    }
    pegaNft()
  }, []);

  return (
    <section className="flex mx-[10%] my-20 gap-12 justify-center items-center">
      <div className="w-[50%]">
        <h1 className="text-6xl font-semibold leading-[72px]">
          Discover Digital Art & Collect NFTs
        </h1>
        <p className="my-6 mr-4 leading-[35px] text-xl font-extralight">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <ButtonAndIcon
          text={"Get Started"}
          icon={"src/assets/icons/RocketLaunch.png"}
        />
        <div className="flex my-6 gap-14">
          <div className="flex flex-col gap-2">
            <p className="font-secondaryFont font-bold text-3xl">240k+</p>
            <p className="text-xl font-extralight">Total Sale</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-secondaryFont font-bold text-3xl">100k+</p>
            <p className="text-xl font-extralight">Auctions</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-secondaryFont font-bold text-3xl">240k+</p>
            <p className="text-xl font-extralight">Artists</p>
          </div>
        </div>
      </div>
      <div>
        <TrendingCard
          cardImagePath={nft?.image.stringValue}
          title={nft?.title.stringValue}
          avatarName={nft?.artist.stringValue}
          avatarIconPath={"src/assets/images/Avatar.png"}
        />
      </div>
    </section>
  );
}
