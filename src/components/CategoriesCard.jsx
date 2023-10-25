export default function CategoriesCard({text, iconPath, imagePath}) {
  return (
    <div className="bg-[#3B3B3B] rounded-3xl w-auto relative">
      <img
        className="rounded-t-3xl"
        src={imagePath}
      />
      <img className="absolute top-1/2 transform -translate-y-16 left-1/2 -translate-x-1/2" src={iconPath}></img>
      <p className="my-5 ml-8 text-2xl font-semibold">{text}</p>
    </div>
  );
}
