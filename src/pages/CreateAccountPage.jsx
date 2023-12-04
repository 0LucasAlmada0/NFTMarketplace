import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function CreateAccountPage() {
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const authentication = getAuth();

  const { setUser } = useContext(UserContext);

  function createUser(event) {
    event.preventDefault();
    const newUser = { email: userEmail, password: userPassword };
    setUser(newUser);
    createUserWithEmailAndPassword(
      authentication,
      newUser.email,
      newUser.password
    )
      .then((userCredential) => {
        const usuario = userCredential.usuario;
        console.log(usuario);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <section>
      <form className="flex gap-16" onSubmit={createUser}>
        <div>
          <img src="https://picsum.photos/580/700"></img>
        </div>
        <div className="w-1/3 my-24">
          <h1 className="text-5xl font-semibold">Create Account</h1>
          <p className="text-xl mt-5">
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </p>
          <div className="flex flex-col gap-4 w-2/3 mt-10 text-black">
            <input
              placeholder="Username"
              className="rounded-2xl p-2"
              type="text"
            />
            <input
              placeholder="Email"
              className="rounded-2xl p-2"
              type="email"
              onChange={(event) => setUserEmail(event.target.value)}
            />
            <input
              placeholder="Password"
              className="rounded-2xl p-2"
              type="password"
              onChange={(event) => setUserPassword(event.target.value)}
            />
            <input
              placeholder="Confirm Password"
              className="rounded-2xl p-2"
              type="password"
            />
            <button className="text-xl text-white bg-purple-600 rounded-full p-2">
              Create Account
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
