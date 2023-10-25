export default function HowItWorksCard({title, text, cardImage}) {
  return (
    <div className="bg-[#3B3B3B] items-center text-center w-[330px] rounded-3xl px-7">
      <img className="px-[60px] py-[30px] rounded-full" src={cardImage}></img>
      <h2 className="text-2xl font-bold mt-5">{title}</h2>
      <p className="text-base mt-2 mb-7">
        {text}
      </p>
    </div>
  );
}
 