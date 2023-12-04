import { createContext, useState } from "react";

export const UserContext = createContext()

export function UserProvider({children}) {

    const [user, setUser] = useState({email: null, password: null})

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

// export default function UserContext() {
//   const [user, setUser] = useState("Nenhum usuario logado!");

//   return (
//     <div>
//       <h1>USUARIO: {user}</h1>
//     </div>
//   );
// }
