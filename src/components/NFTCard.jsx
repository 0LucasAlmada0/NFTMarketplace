export default function NFTCard({ cardImagePath, title, avatarName, avatarIconPath}) {
  return (
    <>
      <img src={cardImagePath}></img>
        <div className="p-5 bg-[#3B3B3B] rounded-b-3xl">
        <h2 className="text-xl font-bold my-2">{title}</h2>
            <div className="flex gap-3">
              <img src={avatarIconPath}></img>
              <p className="text-base">{avatarName}</p>
            </div>
        </div>
    
    </>
  );
}