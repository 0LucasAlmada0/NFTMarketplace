import { Link } from 'react-router-dom'

export default function CreatorsCard({creatorImage, creatorUsername, creatorTotalSales}) {
  return (
    <div className="bg-[#3B3B3B] text-center rounded-3xl p-5">
      <Link to={'/artist'}>
        <img
          className="m-auto rounded-full"
          src={creatorImage}
        ></img>
        <h2 className="mt-6 mb-1 text-2xl font-bold">{creatorUsername}</h2>
      </Link>
      <p className="text-[#858584]">
        Total Sales: <b>{creatorTotalSales} ETH</b>
      </p>
    </div>
  );
}
