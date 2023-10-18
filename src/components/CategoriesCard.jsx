export default function CategoriesCard() {
  return (
    <div className="bg-[#3B3B3B] rounded-3xl w-auto relative">
      <img
        className="rounded-t-3xl"
        src="https://picsum.photos/600?blur=10"
      />
      <img className="absolute top-1/2 transform -translate-y-16 left-1/2 -translate-x-1/2" src="https://picsum.photos/100"></img>
      <p className="my-5 ml-8 text-2xl font-semibold">Art</p>
    </div>
  );
}
