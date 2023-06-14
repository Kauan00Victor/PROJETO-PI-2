import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB24hUkVyXK_vXDP92iBcHpcjsy04Utq8g",
  authDomain: "back-end-react2.firebaseapp.com",
  projectId: "back-end-react2",
  storageBucket: "back-end-react2.appspot.com",
  messagingSenderId: "841571748550",
  appId: "1:841571748550:web:cc8a00cf114d6f585ee5c7"
};

const app = initializeApp(firebaseConfig);

const urlApi = "https://back-end-react2-default-rtdb.firebaseio.com/"

export { app, urlApi}