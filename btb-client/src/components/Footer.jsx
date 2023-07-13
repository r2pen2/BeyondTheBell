import { Text, Link, Button } from '@nextui-org/react'
import React, {useState, useEffect, useContext} from 'react'
import logo from "../assets/images/LogoHD.png";
import footerBackground from "../assets/images/footerBackground.png";

import { signOut } from 'firebase/auth';
import { auth, signInWithGoogle } from '../api/firebase';
import { firestore } from '../api/firebase';
import { getDoc, doc, setDoc } from 'firebase/firestore';

import { Copyright } from "../libraries/Web-Legos/components/Footer";
import { CurrentUserContext } from '../App';

export default function Footer() {

  const [currentSignIn, setCurrentSignIn] = useState(null);

  const {currentUser, setCurrentUser} = useContext(CurrentUserContext);

  useEffect(() => {
    auth.onAuthStateChanged(u => {
      setCurrentSignIn(u);
    })
  }, [])

  function handleSignInClick() {
    if (auth.currentUser) {
      signOut(auth);
      setCurrentSignIn(null);
    } else {
      signInWithGoogle().then(authUser => {
        setCurrentSignIn(authUser);
        if (authUser) {
          const uid = authUser.uid;
          const docRef = doc(firestore, "users", uid);
          getDoc(docRef).then((docSnap) => {
            if (!docSnap.exists()) {
              // User does not exist
              const newUser = {
                testimonials: false,
                offerings: false,
                staff: false,
                displayName: authUser.displayName,
                email: authUser.email,
                op: false,
              }
              setCurrentUser(newUser);
              setDoc(doc(firestore, "users", authUser.uid), newUser);
            } else {
              setCurrentUser(docSnap.data());
            }
          })
        }
      }).catch((err) => {
        console.warn(err);
        setCurrentSignIn(null);
      });
    }
  }
  
  return (
    <footer>
      <img src={footerBackground} className="footer-background" alt="footer-background" />
      <div className="footer-content w-100" >
        <div className="container-fluid mt-3 mb-3 d-flex flex-column align-items-center">
          <div className="row d-flex flex-row w-100 align-items-center gap-5 justify-content-center">
            <div className="col-lg-12 col-xl-3 d-flex flex-column align-items-center">
              <img src={logo} alt="logo-transparent" className="m-2" style={{width: 150, height: 150}}/>
              <Text h2>
                Beyond the Bell Education
              </Text>
              <Text>
                3 Man-Mar Drive #14 <br /> Plainville, MA 02762
              </Text>
              <Text>
                questions@beyondthebelleducation.com <br /> (508) 316-4751
              </Text>
            </div>
            <div className="col-lg-12 col-xl-4 d-flex flex-column align-items-center">
              <Text h2>
                Hours
              </Text>
              <Text>
                Monday - Friday 8am to 6pm
              </Text>
              <Text>
                Other hours available by appointment
              </Text>
            </div>
            <div className="col-lg-12 col-xl-3 d-flex flex-column align-items-center">
              <Text>
                <Link block color="primary" href="/home">
                  Home
                </Link>
              </Text>
              <Text>
                <Link block color="primary" href="/about">
                  Who We Are
                </Link>
              </Text>
              <Text>
                <Link block color="primary" href="/services">
                  Services
                </Link>
              </Text>
              <Text>
                <Link block color="primary" href="contact">
                  Contact Us
                </Link>
              </Text>
            </div>
          </div>
        </div>
        <div className="fill-line mb-3" />
        <div className="d-flex flex-column gap-2 m-2 align-items-center">          
          <Copyright year="2023" name="Beyond the Bell Educational Services"/>
          <Button light onClick={handleSignInClick}>
            {currentSignIn ? `Signed in as ${currentSignIn.displayName}` : "Admin Login"}
          </Button>
        </div>
      </div>
    </footer>
  )
}
