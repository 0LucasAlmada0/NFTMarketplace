import ButtonAndIcon from "../components/shared/ButtonAndIcon";

export default function ArtistInfo() {
  return (
    <section>
      <div className="relative">
        <img src="https://picsum.photos/2000/370" />
        <img
          className="absolute -bottom-12 ml-[10%] rounded-2xl border-[#2B2B2B] border-2"
          src="https://picsum.photos/120"
        />
      </div>
      <div className="flex justify-between mx-[10%] my-20">
        <div>
          <h1 className="text-[51px] font-semibold">Animakid</h1>
          <div className="flex gap-5 my-7">
            <div>
              <h3>250k+</h3>
              <p>Volume</p>
            </div>
            <div>
              <h3>50k+</h3>
              <p>NFTs Sold</p>
            </div>
            <div>
              <h3>3000+</h3>
              <p>Followers</p>
            </div>
          </div>
          <div className="my-7">
            <div>
              <p>Bio</p>
              <h3>The internet's friendliest designer kid.</h3>
            </div>
          </div>
          <div className="my-7">
            <div>
              <p>Links</p>
              <div className="flex mt-2 gap-3">
                <img className="cursor-pointer" src="/src/assets/icons/SocialMediaIcons/Globe.png" alt="Artist Site" />
                <img className="cursor-pointer" src="/src/assets/icons/SocialMediaIcons/DiscordLogo.png" alt="Artist Discord Link" />
                <img className="cursor-pointer" src="/src/assets/icons/SocialMediaIcons/YoutubeLogo.png" alt="Artist Youtube Icon" />
                <img className="cursor-pointer" src="/src/assets/icons/SocialMediaIcons/TwitterLogo.png" alt="Artist Twitter Icon" />
                <img className="cursor-pointer" src="/src/assets/icons/SocialMediaIcons/InstagramLogo.png" alt="Artist Instagram Icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <ButtonAndIcon
            text={"0xc0E3...B79C"}
            icon={"/src/assets/icons/RocketLaunch.png"}
          />
          <ButtonAndIcon text={"Follow"} icon={"/src/assets/icons/RocketLaunch.png"} />
        </div>
      </div>
    </section>
  );
}
