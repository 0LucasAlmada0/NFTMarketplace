import ButtonAndIcon from "./shared/ButtonAndIcon";

export default function Navbar() {
    return (
        <nav className="flex py-6 px-14 items-center text-white font-bold">
            <div className="flex flex-1 gap-4 items-center">
                <img src="src/assets/images/Logo.png"></img>
                <h1 className="font-bold text-xl tracking-wider">NFT Marketplace</h1>
            </div>
            <div className="flex justify-end">
                <ul className="flex gap-12 items-center">
                    <li className="font-semibold">Marketplace</li>
                    <li className="font-semibold">Rankings</li>
                    <li className="font-semibold">Connect a wallet</li>
                    <ButtonAndIcon icon={'src/assets/icons/User.png'} text={"Sign Up"}/>
                </ul>
            </div>
        </nav>
    )
}