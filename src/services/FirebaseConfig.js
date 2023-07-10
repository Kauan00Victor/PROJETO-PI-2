import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALhkM6TaZQkPWlle7EsxlKlPyzApqMSws",
  authDomain: "projeto-pi-c0f3a.firebaseapp.com",
  databaseURL: "https://projeto-pi-c0f3a-default-rtdb.firebaseio.com",
  projectId: "projeto-pi-c0f3a",
  storageBucket: "projeto-pi-c0f3a.appspot.com",
  messagingSenderId: "1019097696241",
  appId: "1:1019097696241:web:3093c57b88b61658fea650"
};

const app = initializeApp(firebaseConfig);
const urlApi = "https://projeto-pi-c0f3a-default-rtdb.firebaseio.com/"

export { app, urlApi}
