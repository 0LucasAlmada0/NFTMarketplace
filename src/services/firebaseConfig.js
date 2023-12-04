import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAhgnV1BL5dUaXnosD24FxE6uiZl7d3WfQ",
  authDomain: "projeto-teste-ab997.firebaseapp.com",
  projectId: "projeto-teste-ab997",
  storageBucket: "projeto-teste-ab997.appspot.com",
  messagingSenderId: "1078405413020",
  appId: "1:1078405413020:web:d6ba38ed186062d3dc9559",
  measurementId: "G-YYXSERJ62B"
};

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);