import NFTCard from "./NFTCard";
import { getNfts } from "../services/dbService";
import { useEffect, useState } from "react";

export default function NFTCardsSection() {
  const [nftsArr, setNftsArr] = useState([]);

  useEffect(() => {
    async function pegaNfts() {
      const data = await getNfts();
      setNftsArr(data);
      console.log(nftsArr);
    }
    pegaNfts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 py-20 px-[10%] bg-[#3B3B3B]">
      {nftsArr.map((el) => {
        return (
          <NFTCard
            key={el?.id?.integerValue}
            nftImage={el?.image?.stringValue}
            nftTitle={el?.title?.stringValue}
            nftUser={el?.artist?.stringValue}
            nftPrice={el?.price?.doubleValue}
            nftUserImage={"https://picsum.photos/25"}
            nftHighest={el?.highestPrice?.doubleValue}
            bgColor={"#2B2B2B"}
          />
        );
      })}
    </div>
  );
}
