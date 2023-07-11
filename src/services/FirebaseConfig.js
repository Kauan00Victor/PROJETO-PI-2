import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjJeYx8t23hMOVZpKUZ1w55bmSLiUJPtY",
  authDomain: "back-front-react1-c707b.firebaseapp.com",
  databaseURL: "https://back-front-react1-c707b-default-rtdb.firebaseio.com",
  projectId: "back-front-react1-c707b",
  storageBucket: "back-front-react1-c707b.appspot.com",
  messagingSenderId: "937088654822",
  appId: "1:937088654822:web:7992aedb74c6405de18a27",
  measurementId: "G-2DP6F0DX7G"
};

const app = initializeApp(firebaseConfig);
const urlApi = "https://back-front-react1-c707b-default-rtdb.firebaseio.com/"

export { app, urlApi}
