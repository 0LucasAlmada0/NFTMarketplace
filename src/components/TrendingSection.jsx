import CollectionCard from "./CollectionCard";

export default function TrendingSection() {
  return (
    <section className="mb-20 mx-[10%]">
      <div className="flex flex-col mt-44 mb-14 gap-3">
        <h2 className="text-4xl font-semibold">Trending Collection</h2>
        <p className="text-2xl font-normal">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="flex justify-between">
        <CollectionCard
          mainImage="https://picsum.photos/330"
          imageOne="https://picsum.photos/330"
          imageTwo="https://picsum.photos/330"
          imageThree="https://picsum.photos/330"
          collectionName="DSGN Animals"
          userImage="https://picsum.photos/330"
          userName="RukasuArumada"
        />
        <CollectionCard
          mainImage="https://picsum.photos/330"
          imageOne="https://picsum.photos/330"
          imageTwo="https://picsum.photos/330"
          imageThree="https://picsum.photos/330"
          collectionName="Magic Mushrooms"
          userImage="https://picsum.photos/330" 
          userName="RukasuArumada"
        />
        <CollectionCard
          mainImage="https://picsum.photos/330"
          imageOne="https://picsum.photos/330"
          imageTwo="https://picsum.photos/330"
          imageThree="https://picsum.photos/330"
          collectionName="Disco Machines"
          userImage="https://picsum.photos/330"
          userName="RukasuArumada"
        />
      </div>
    </section>
  );
}
