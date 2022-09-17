import { initializeApp } from "firebase/app"; import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAhfJJ2xmV84BUnx6nYVoZyZOX46v-Rq3Q",
    authDomain: "codeforgood-team13-f6ede.firebaseapp.com",
    databaseURL: "https://codeforgood-team13-f6ede-default-rtdb.firebaseio.com/",
    projectId: "codeforgood-team13-f6ede",
    storageBucket: "codeforgood-team13-f6ede.appspot.com",
    messagingSenderId: "507353924889",
    appId: "1:507353924889:web:8d4bc87d8efc33fa82b188",
    measurementId: "G-GP7KCGPSKK"
};

const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);