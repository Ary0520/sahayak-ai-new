// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVejP5kQrWRkd4SKQOPpxflRt5cfK0eyE",
  authDomain: "sahayak-ai-fe32b.firebaseapp.com",
  projectId: "sahayak-ai-fe32b",
  storageBucket: "sahayak-ai-fe32b.firebasestorage.app",
  messagingSenderId: "531046867052",
  appId: "1:531046867052:web:29e55615808064f8513849",
  measurementId: "G-RNSP4ENPJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in production)
let analytics;
if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
  analytics = getAnalytics(app);
}

// Initialize Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Connect to emulators in development (optional)
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  // Uncomment these lines if you want to use Firebase emulators for local development
  // if (!auth._delegate._config.emulator) {
  //   connectAuthEmulator(auth, "http://localhost:9099");
  // }
  // if (!db._delegate._databaseId.projectId.includes('demo-')) {
  //   connectFirestoreEmulator(db, 'localhost', 8080);
  // }
}

export { auth, db, analytics };
export default app;