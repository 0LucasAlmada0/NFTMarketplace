import ButtonAndIcon from "./ButtonAndIcon";


export default function Navbar() {
    return (
        <nav className="flex py-6 px-14 items-center text-white font-bold">
            <div className="flex flex-1 gap-4 items-center">
                <img src="a"></img>
                <h1>NFT Marketplace</h1>
            </div>
            <div className="flex justify-end">
                <ul className="flex gap-12 items-center">
                    <li>Marketplace</li>
                    <li>Rankings</li>
                    <li>Connect a wallet</li>
                    <ButtonAndIcon icon="a" text={"Sign In"}/>
                </ul>
            </div>
        </nav>
    )
}