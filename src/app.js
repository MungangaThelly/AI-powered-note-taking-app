// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, onValue } from "firebase/database"; // Import necessary functions for Firebase Database

// Your web app's Firebase configuration
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

// Initialize Realtime Database
const database = getDatabase(app);

// Push a new note to the "notes" path
const noteRef = ref(database, 'notes');
push(noteRef, {
  content: "This is a note",
  timestamp: Date.now()
});

// Listen for changes in the "notes" path
onValue(noteRef, (snapshot) => {
  const notes = snapshot.val();
  console.log(notes);
});
