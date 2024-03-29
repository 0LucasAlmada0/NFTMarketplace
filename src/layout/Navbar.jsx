import ButtonAndIcon from "../components/shared/ButtonAndIcon";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav className="flex py-6 px-14 items-center text-white font-bold">
      <Link className="flex flex-1 gap-4 items-center cursor-pointer">
        <img src="/src/assets/images/Logo.png"></img>
        <h1 className="font-bold text-xl tracking-wider">NFT Marketplace</h1>
      </Link>
      <div className="flex justify-end">
        <ul className="flex gap-12 items-center">
          <Link to={"/marketplace"}>
            <li className="font-semibold cursor-pointer hover:font-bold scale-120">
              Marketplace
            </li>
          </Link>
          <li className="font-semibold cursor-pointer hover:font-bold scale-120">
            Rankings
          </li>
          <Link to={"/connectWallet"}>
            <li className="font-semibold cursor-pointer hover:font-bold scale-120">
              Connect a wallet
            </li>
          </Link>
          {user.email ? (
            <h2 className="text-purple-400 text-xl">{user.email}</h2>
          ) : (
            <ButtonAndIcon
              icon={"/src/assets/icons/User.png"}
              text={"Sign Up"}
              link={"/createAccount"}
            />
          )}
        </ul>
      </div>
    </nav>
  );
}
