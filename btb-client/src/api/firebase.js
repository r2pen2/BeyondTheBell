// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";
import { serverURL } from "../App";
import { getFileExtension } from "../libraries/Web-Legos/api/files";
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
          reject(error)
        });
    })
}

export async function uploadImgToStorageAndReturnDownloadLink(directory, file, fileName) {
  return new Promise(async (resolve, reject) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      const path = `images/${directory}/${fileName}`;
      fetch(`${serverURL}${path}`, {
        method: "POST",
        body: formData,
      }).then(res => {
        if (res.status === 200) {
          resolve(path);
        } else {
          resolve(null);
        }
      });
    } else {
      resolve(null);
    }
  })
}

export async function removeImage(path) {
  return new Promise(async (resolve, reject) => {
    if (path) {
      fetch(`${serverURL}delete-img?path=${path}`, {
        method: "POST",
      }).then(res => {
        if (res.status === 200) {
          resolve(path);
        } else {
          resolve(null);
        }
      });
    } else {
      resolve(null);
    }
  })
}