import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const nftsCollection = collection(db, "nfts");

//Read 'nfts' Collection

export const getNfts = async () => {
  const data = await getDocs(nftsCollection);
  return data.docs.map((el) => el._document.data.value.mapValue.fields);
};
