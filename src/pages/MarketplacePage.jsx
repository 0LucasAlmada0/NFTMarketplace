import NFTCardsSection from "../components/NFTCardsSection";

export default function MarketplacePage() {
  return (
    <section>
      <div className="my-20 mx-[10%]">
        <h2 className="text-[51px] font-semibold">Browse Marketplace</h2>
        <p className="text-[22px]">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>
        <input
          className="w-[100%] mt-7 p-4 rounded-2xl text-[#fff] bg-[#2B2B2B] border border-[#3b3b3b]"
          placeholder="Search your favorite NFTs"
          type="search"
        />
      </div>
      <div className="mb-1">
        <NFTCardsSection />
      </div>
    </section>
  );
}
