export default function NFTCard({
  nftImage,
  nftTitle,
  nftUserImage,
  nftUser,
  nftPrice,
  nftHighest,
}) {
  return (
    <div className="bg-[#3B3B3B] w-[330px] rounded-3xl">
      <img className="rounded-t-3xl" src={nftImage}></img>
      <div className="p-6">
        <h2 className="text-2xl font-semibold">{nftTitle}</h2>
        <div className="flex gap-3 mb-7 mt-2">
          <img className="rounded-full" src={nftUserImage}></img>
          <p>{nftUser}</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-xs text-[#858584]">Price</p>
            <p>
              <b className="text-base">{nftPrice} ETH</b>
            </p>
          </div>
          <div>
            <p className="text-xs text-[#858584]">Highest Bid</p>
            <p>
              <b className="text-md">{nftHighest} wETH</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
