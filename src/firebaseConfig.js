import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC799oAOArRIYfwZDzeoVqz2ufedlZb1uQ",
  authDomain: "weather-app-eb593.firebaseapp.com",
  projectId: "weather-app-eb593",
  storageBucket: "weather-app-eb593.appspot.com",
  messagingSenderId: "894635844",
  appId: "1:894635844:web:ed29000b2b6f331ccb5111",
  measurementId: "G-GL6THGCVJ4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }