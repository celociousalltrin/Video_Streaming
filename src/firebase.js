import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDjYw_ykPwFEoSJX6ZuPRBvW3KGstvfFoU",
    authDomain: "video-streaming-9149d.firebaseapp.com",
    projectId: "video-streaming-9149d",
    storageBucket: "video-streaming-9149d.appspot.com",
    messagingSenderId: "116670319510",
    appId: "1:116670319510:web:de01c81e5c82870adcabb7"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore()

  export {app, auth, db};