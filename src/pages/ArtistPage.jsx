import { useState } from "react";
import ArtistInfo from "../components/ArtistInfo";
import NFTCard from "../components/NFTCard";

export default function ArtistPage() {
  const [activeNavItem, setActiveNavItem] = useState('created');

  function navItensHandle(navItem) {
    setActiveNavItem(navItem);
  }

  return (
    <main>
      <ArtistInfo />
      <section className="mb-1">
        <div className="flex justify-around mx-[10%] my-3  border-t border-t-[#2B2B2B] ">
          <div
            onClick={() => navItensHandle("created")}
            className={`flex gap-3 cursor-pointer items-center ${
              activeNavItem === "created" ? "border-b-4 border-b-[#858584]" : ""
            }`}
          >
            <h3>Created</h3>
            <p className={`bg-[#3B3B3B] py-1 px-2 items-center text-center rounded-full ${activeNavItem =='created' ? "bg-[#858584]" : ""}`}>
              302
            </p>
          </div>
          <div
            onClick={() => navItensHandle("owned")}
            className={`flex gap-3 cursor-pointer items-center ${
              activeNavItem === "owned" ? "border-b-4 border-b-[#858584]" : ""
            }`}
          >
            <h3>Owned</h3>
            <p className={`bg-[#3B3B3B] py-1 px-2 items-center text-center rounded-full ${activeNavItem =='owned' ? "bg-[#858584]" : ""}`}>
              67
            </p>
          </div>
          <div
            onClick={() => navItensHandle("collection")}
            className={`flex gap-3 cursor-pointer items-center ${
              activeNavItem === "collection"
                ? "border-b-4 border-b-[#858584]"
                : ""
            }`}
          >
            <h3>Collection</h3>
            <p className={`bg-[#3B3B3B] py-1 px-2 items-center text-center rounded-full ${activeNavItem =='collection' ? "bg-[#858584]" : ""}`}>
              4
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 py-20 px-[10%] bg-[#3B3B3B]">
          <NFTCard
            nftImage={"https://picsum.photos/1000"}
            nftTitle={"NFT Foda"}
            nftUser={"RukasuArumada"}
            nftUserImage={"https://picsum.photos/20"}
            nftPrice={"3.14"}
            nftHighest={"5.00"}
            bgColor={"#2B2B2B"}
          />
          <NFTCard
            nftImage={"https://picsum.photos/1000"}
            nftTitle={"NFT Foda"}
            nftUser={"RukasuArumada"}
            nftUserImage={"https://picsum.photos/20"}
            nftPrice={"3.14"}
            nftHighest={"5.00"}
            bgColor={"#2B2B2B"}
          />
          <NFTCard
            nftImage={"https://picsum.photos/1000"}
            nftTitle={"NFT Foda"}
            nftUser={"RukasuArumada"}
            nftUserImage={"https://picsum.photos/20"}
            nftPrice={"3.14"}
            nftHighest={"5.00"}
            bgColor={"#2B2B2B"}
          />
          <NFTCard
            nftImage={"https://picsum.photos/1000"}
            nftTitle={"NFT Foda"}
            nftUser={"RukasuArumada"}
            nftUserImage={"https://picsum.photos/20"}
            nftPrice={"3.14"}
            nftHighest={"5.00"}
            bgColor={"#2B2B2B"}
          />
          <NFTCard
            nftImage={"https://picsum.photos/1000"}
            nftTitle={"NFT Foda"}
            nftUser={"RukasuArumada"}
            nftUserImage={"https://picsum.photos/20"}
            nftPrice={"3.14"}
            nftHighest={"5.00"}
            bgColor={"#2B2B2B"}
          />
          <NFTCard
            nftImage={"https://picsum.photos/1000"}
            nftTitle={"NFT Foda"}
            nftUser={"RukasuArumada"}
            nftUserImage={"https://picsum.photos/20"}
            nftPrice={"3.14"}
            nftHighest={"5.00"}
            bgColor={"#2B2B2B"}
          />
          <NFTCard
            nftImage={"https://picsum.photos/1000"}
            nftTitle={"NFT Foda"}
            nftUser={"RukasuArumada"}
            nftUserImage={"https://picsum.photos/20"}
            nftPrice={"3.14"}
            nftHighest={"5.00"}
            bgColor={"#2B2B2B"}
          />
          <NFTCard
            nftImage={"https://picsum.photos/1000"}
            nftTitle={"NFT Foda"}
            nftUser={"RukasuArumada"}
            nftUserImage={"https://picsum.photos/20"}
            nftPrice={"3.14"}
            nftHighest={"5.00"}
            bgColor={"#2B2B2B"}
          />
          <NFTCard
            nftImage={"https://picsum.photos/1000"}
            nftTitle={"NFT Foda"}
            nftUser={"RukasuArumada"}
            nftUserImage={"https://picsum.photos/20"}
            nftPrice={"3.14"}
            nftHighest={"5.00"}
            bgColor={"#2B2B2B"}
          />
        </div>
      </section>
    </main>
  );
}
