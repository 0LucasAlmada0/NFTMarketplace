import NFTCard from "./NFTCard";
import ButtonAndIcon from "./shared/ButtonAndIcon";

export default function DiscoverSection() {
  return (
    <section className="py-20 mx-[10%]">
      <div className="flex justify-between py-20">
        <div>
          <h2 className="text-4xl font-semibold">Discover More NFTs</h2>
          <p className="text-xl">Explore New Trending NFTs</p>
        </div>
        <div>
          <ButtonAndIcon
            className="justify-end"
            icon={"https://picsum.photos/20"}
            text={"See All"}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <NFTCard
          nftImage={"https://picsum.photos/330"}
          nftTitle={"NFT Foda"}
          nftUser={"RukasuArumada"}
          nftUserImage={"https://picsum.photos/20"}
          nftPrice={"3.14"}
          nftHighest={"5.00"}
        />
        <NFTCard
          nftImage={"https://picsum.photos/330"}
          nftTitle={"NFT Foda"}
          nftUser={"RukasuArumada"}
          nftUserImage={"https://picsum.photos/20"}
          nftPrice={"3.14"}
          nftHighest={"5.00"}
        />
        <NFTCard
          nftImage={"https://picsum.photos/330"}
          nftTitle={"NFT Foda"}
          nftUser={"RukasuArumada"}
          nftUserImage={"https://picsum.photos/20"}
          nftPrice={"3.14"}
          nftHighest={"5.00"}
        />
      </div>
    </section>
  );
}
