import {getStorage} from 'firebase/storage';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDdiLAFyr-aOc40mxqp0k8q1Ax7gmETy2g",
  authDomain: "pet-reunite-74751.firebaseapp.com",
  projectId: "pet-reunite-74751",
  storageBucket: "pet-reunite-74751.appspot.com",
  messagingSenderId: "38132778215",
  appId: "1:38132778215:web:dcd235f9200f628a668e42",
  measurementId: "G-P7V8P8W68X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// export default firebase;