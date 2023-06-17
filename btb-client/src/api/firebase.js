// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIZYHsbNNMhRviRcaeyrpYDQ73AwLrapk",
  authDomain: "beyond-the-bell-20097.firebaseapp.com",
  projectId: "beyond-the-bell-20097",
  storageBucket: "beyond-the-bell-20097.appspot.com",
  messagingSenderId: "977570434108",
  appId: "1:977570434108:web:7a2ba50a64da35619ec739"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage(app);

/**
 * Sign in user with google and return user
 */
const provider = new GoogleAuthProvider();
export async function signInWithGoogle() {
    return new Promise((resolve, reject) => {
      signInWithPopup(auth, provider).then((result) => {
          resolve(result.user);
        }).catch((error) => {
          reject(error);
        });
    })
}