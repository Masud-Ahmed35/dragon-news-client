import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCwXcayz-TxUW8g2hK7XtpeThFfRPMRs4Q",
    authDomain: "dragon-news-143ca.firebaseapp.com",
    projectId: "dragon-news-143ca",
    storageBucket: "dragon-news-143ca.appspot.com",
    messagingSenderId: "937228504030",
    appId: "1:937228504030:web:f1678eafab21b35bce6b4f"
};

const app = initializeApp(firebaseConfig);

export default app;