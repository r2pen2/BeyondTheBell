import { Text, Link, Button } from '@nextui-org/react'
import React, {useState, useEffect, useContext} from 'react'
import logo from "../assets/images/LogoHD.png";
import footerBackground from "../assets/images/footerBackground.png";

import { signOut } from 'firebase/auth';
import { auth, signInWithGoogle } from '../api/firebase';
import { firestore } from '../api/firebase';
import { getDoc, doc, setDoc } from 'firebase/firestore';

import { CurrentUserContext } from '../App';
import { WLText, WLCopyright, WLHeader } from '../libraries/Web-Legos/components/Text';

export default function Footer() {

  const [currentSignIn, setCurrentSignIn] = useState(null);

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
              setDoc(doc(firestore, "users", authUser.uid), newUser);
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
        <FooterContent />
        <div className="fill-line mb-3" />
        <div className="d-flex flex-column gap-2 m-2 align-items-center">          
          <FooterCopyright />
          <Button light onClick={handleSignInClick}>
            {currentSignIn ? `Signed in as ${currentSignIn.displayName}` : "Admin Login"}
          </Button>
        </div>
      </div>
    </footer>
  )
}

function FooterContent() {

  const {currentUser} = useContext(CurrentUserContext)

  const userCanEditText = currentUser ? currentUser.op : false;

  return (
    
    <div className="container-fluid mt-3 mb-3 d-flex flex-column align-items-center">
    <div className="row d-flex flex-row w-100 align-items-center gap-5 justify-content-center">
      <div className="col-lg-12 col-xl-3 d-flex flex-column align-items-center">
        <img src={logo} alt="logo-transparent" className="m-2" style={{width: 150, height: 150}}/>
        <WLHeader headerLevel={2}>
          Beyond the Bell Education
        </WLHeader>
        <WLText firestoreId="footer-contact" editable={userCanEditText} />
      </div>
      <div className="col-lg-12 col-xl-4 d-flex flex-column align-items-center">
        <WLHeader headerLevel={2}>
          Hours
        </WLHeader>
        <WLText firestoreId="footer-hours" editable={userCanEditText} />
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
  )
}

function FooterCopyright() {

  const {currentUser} = useContext(CurrentUserContext)

  const userCanEditText = currentUser ? currentUser.op : false;

  return  <WLCopyright editable={userCanEditText}/>;
  
}