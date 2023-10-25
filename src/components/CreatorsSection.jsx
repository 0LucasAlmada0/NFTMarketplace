import CreatorsCard from "./CreatorsCard";
import ButtonAndIcon from "./shared/ButtonAndIcon";

export default function CreatorSection() {
  return (
    <section className="py-[80px] mx-[10%]">
      <div className="flex justify-between mb-20 items-end">
        <div>
          <h2 className="text-4xl font-bold">Top Creators</h2>
          <p className="text-2xl">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <div>
          <ButtonAndIcon
            icon={"src/assets/icons/RocketLaunch.png"}
            text={"View Rankings"}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-3 gap-8 text-center">
        <CreatorsCard creatorImage={"https://picsum.photos/110"} creatorUsername={"RukasuArumada"} creatorTotalSales={"3.14"}/>
        <CreatorsCard creatorImage={"https://picsum.photos/110"} creatorUsername={"RukasuArumada"} creatorTotalSales={"3.14"}/>
        <CreatorsCard creatorImage={"https://picsum.photos/110"} creatorUsername={"RukasuArumada"} creatorTotalSales={"3.14"}/>
        <CreatorsCard creatorImage={"https://picsum.photos/110"} creatorUsername={"RukasuArumada"} creatorTotalSales={"3.14"}/>
        <CreatorsCard creatorImage={"https://picsum.photos/110"} creatorUsername={"RukasuArumada"} creatorTotalSales={"3.14"}/>
        <CreatorsCard creatorImage={"https://picsum.photos/110"} creatorUsername={"RukasuArumada"} creatorTotalSales={"3.14"}/>
        <CreatorsCard creatorImage={"https://picsum.photos/110"} creatorUsername={"RukasuArumada"} creatorTotalSales={"3.14"}/>
        <CreatorsCard creatorImage={"https://picsum.photos/110"} creatorUsername={"RukasuArumada"} creatorTotalSales={"3.14"}/>
        <CreatorsCard creatorImage={"https://picsum.photos/110"} creatorUsername={"RukasuArumada"} creatorTotalSales={"3.14"}/>
        <CreatorsCard creatorImage={"https://picsum.photos/110"} creatorUsername={"RukasuArumada"} creatorTotalSales={"3.14"}/>
        <CreatorsCard creatorImage={"https://picsum.photos/110"} creatorUsername={"RukasuArumada"} creatorTotalSales={"3.14"}/>
        <CreatorsCard creatorImage={"https://picsum.photos/110"} creatorUsername={"RukasuArumada"} creatorTotalSales={"3.14"}/>
      </div>
    </section>
  );
}
