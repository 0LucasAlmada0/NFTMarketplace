export default function NFTCard() {
  return (
    <div className="bg-[#3B3B3B] w-[330px] rounded-3xl">
      <img className="rounded-t-3xl" src="https://picsum.photos/330"></img>
      <div className="p-6">
          <h2 className="text-2xl font-semibold">Distant Galaxy</h2>
          <div className="flex gap-3 mb-7 mt-2">
            <img className="rounded-full" src="https://picsum.photos/20"></img>
            <p>MoonDancer</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-[#858584]">Price</p>
              <p>
                <b className="text-base">1.63 ETH</b>
              </p>
            </div>
            <div>
              <p className="text-xs text-[#858584]">Highest Bid</p>
              <p>
                <b className="text-md">0.33 wETH</b>
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}
