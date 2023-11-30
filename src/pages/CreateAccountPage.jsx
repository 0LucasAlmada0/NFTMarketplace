import ButtonAndIcon from "../components/shared/ButtonAndIcon";

export default function CreateAccountPage() {
  return (
    <section className="">
      <div className="flex gap-16">
        <div>
          <img src="https://picsum.photos/580/700"></img>
        </div>
        <div className="w-1/3 my-24">
          <h1 className="text-5xl font-semibold">Create Account</h1>
          <p className="text-xl mt-5">
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </p>
          <div className="flex flex-col gap-4 w-2/3 mt-10">
            <input
              placeholder="Username"
              className="rounded-2xl p-2"
              type="text"
            />
            <input
              placeholder="Email"
              className="rounded-2xl p-2"
              type="email"
            />
            <input
              placeholder="Password"
              className="rounded-2xl p-2"
              type="password"
            />
            <input
              placeholder="Confirm Password"
              className="rounded-2xl p-2"
              type="password"
            />
            <ButtonAndIcon text={"Create Account"} />
          </div>
        </div>
      </div>
    </section>
  );
}
