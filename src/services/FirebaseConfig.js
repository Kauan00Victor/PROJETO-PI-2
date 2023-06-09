import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDf8VYTaJYRfElTofkpCRa3pQxfElu5-6M",
    authDomain: "back-front-react1-e9997.firebaseapp.com",
    projectId: "back-front-react1-e9997",
    storageBucket: "back-front-react1-e9997.appspot.com",
    messagingSenderId: "119412134693",
    appId: "1:119412134693:web:8870018c67b2266d6800cc"
};

const app = initializeApp(firebaseConfig);

export { app };