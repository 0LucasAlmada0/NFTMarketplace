import CategoriesCard from "./CategoriesCard";

export default function CategoriesSection() {
  return (
    <section className="mx-[10%] py-20">
      <div>
        <h2 className="text-4xl font-semibold mt-[80px] mb-[60px]">
          Browse Categories
        </h2>
      </div>
      <div className="grid grid-cols-4 justify-between gap-8">
        <CategoriesCard text={"ART"} iconPath={"https://picsum.photos/100"} imagePath={"https://picsum.photos/600?blur=10"}/>
        <CategoriesCard text={"ART"} iconPath={"https://picsum.photos/100"} imagePath={"https://picsum.photos/600?blur=10"}/>
        <CategoriesCard text={"ART"} iconPath={"https://picsum.photos/100"} imagePath={"https://picsum.photos/600?blur=10"}/>
        <CategoriesCard text={"ART"} iconPath={"https://picsum.photos/100"} imagePath={"https://picsum.photos/600?blur=10"}/>
        <CategoriesCard text={"ART"} iconPath={"https://picsum.photos/100"} imagePath={"https://picsum.photos/600?blur=10"}/>
        <CategoriesCard text={"ART"} iconPath={"https://picsum.photos/100"} imagePath={"https://picsum.photos/600?blur=10"}/>
        <CategoriesCard text={"ART"} iconPath={"https://picsum.photos/100"} imagePath={"https://picsum.photos/600?blur=10"}/>
        <CategoriesCard text={"ART"} iconPath={"https://picsum.photos/100"} imagePath={"https://picsum.photos/600?blur=10"}/>
      </div>
    </section>
  );
}
