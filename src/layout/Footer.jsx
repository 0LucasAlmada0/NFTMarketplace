import InputComponent from "../components/shared/InputComponent";

export default function Footer() {
  return (
    <footer className="py-10 bg-[#3B3B3B]">
      <div className="mx-[10%] flex gap-20 justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 items-center">
            <img src="/src/assets/images/Logo.png"></img>
            <h2 className="font-bold text-2xl">NFT Marketplace</h2>
          </div>
          <p className="text-[#CCCCCC]">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="text-[#CCCCCC]">Join our community</p>
          <div className="flex gap-3">
            <img src="/src/assets/icons/SocialMediaIcons/DiscordLogo.png" alt="Discord Logo" />
            <img src="/src/assets/icons/SocialMediaIcons/YoutubeLogo.png" alt="Youtube Logo" />
            <img src="/src/assets/icons/SocialMediaIcons/TwitterLogo.png" alt="Twitter Logo" />
            <img src="/src/assets/icons/SocialMediaIcons/InstagramLogo.png" alt="Instagram Logo" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-2xl">Explore</h2>
          <p className="text-[#CCCCCC]">Marketplace</p>
          <p className="text-[#CCCCCC]">Rankings</p>
          <p className="text-[#CCCCCC]">Connect a wallet</p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-2xl">Join our weekly digest</h2>
          <p className="text-[#CCCCCC]">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <InputComponent icon={"/src/assets/icons/RocketLaunch.png"} placeholder={"Enter Your Email Here"} buttonText={"Subscribe"}/>
        </div>
      </div>
      <div className="mx-[10%]">
        <hr className="my-8 border-gray-400"></hr>
        <p className="text-[#CCCCCC]">
          LucasAlmada - 2023 | TODOS DIREITOS SÃO MEUS
        </p>
      </div>
    </footer>
  );
}
