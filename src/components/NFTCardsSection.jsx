import NFTCard from "./NFTCard";
import { NFTCardsInfo } from "../models/NFTCardsInfo";

export default function NFTCardsSection() {
  return (
    <div className="grid grid-cols-3 gap-8 py-20 px-[10%] bg-[#3B3B3B]">
      {NFTCardsInfo.map((el) => (
        <NFTCard
          nftImage={el.nftImage}
          nftTitle={el.nftTitle}
          nftUser={el.nftUser}
          nftUserImage={el.nftUserImage}
          nftPrice={el.nftPrice}
          nftHighest={el.nftHighest}
          bgColor={el.bgColor}
        />
      ))}
    </div>
  );
}
