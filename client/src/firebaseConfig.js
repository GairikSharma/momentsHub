import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHCJbdQ0GglurPdut__dwc5xBd7fGuVGw",
  authDomain: "momentshub-a6cc2.firebaseapp.com",
  projectId: "momentshub-a6cc2",
  storageBucket: "momentshub-a6cc2.appspot.com",
  messagingSenderId: "79668269850",
  appId: "1:79668269850:web:d817f785fe5cab6ddd12a3",
  measurementId: "G-475BXJEZQ1"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);