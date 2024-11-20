// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8WQLC-JNXhXa05mlGdR_ofSzFxV4v5Jw",
  authDomain: "ai-powered-note-taking-app.firebaseapp.com",
  databaseURL: "https://ai-powered-note-taking-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ai-powered-note-taking-app",
  storageBucket: "ai-powered-note-taking-app.firebasestorage.app",
  messagingSenderId: "786224937333",
  appId: "1:786224937333:web:4c10f5ec660d88042f7b3c",
  measurementId: "G-W2ND29K95N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const noteRef = firebase.database().ref('notes');
noteRef.push({
  content: "This is a note",
  timestamp: Date.now()
});


const noteRef = firebase.database().ref('notes');
noteRef.on('value', (snapshot) => {
  const notes = snapshot.val();
  console.log(notes);
});
