import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6E-9AO2_pnFm4AlS3ZOiil-fsMCSOFBI",
  authDomain: "movie-picker-application.firebaseapp.com",
  databaseURL:
    "https://movie-picker-application-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movie-picker-application",
  storageBucket: "movie-picker-application.appspot.com",
  messagingSenderId: "830929069188",
  appId: "1:830929069188:web:7e6a8e21303611c7e90ed1",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
