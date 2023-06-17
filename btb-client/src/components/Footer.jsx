import { Grid, Text, Link, Button } from '@nextui-org/react'
import React, {useContext} from 'react'
import logo from "../assets/images/logoTransparent.png";
import footerBackground from "../assets/images/footerBackground.png";

import PlaceIcon from '@mui/icons-material/Place';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LanguageIcon from '@mui/icons-material/Language';

import { btbOrange } from '../assets/style/colors';
import { currentUserContext } from '../api/context';
import { signOut } from 'firebase/auth';
import { signInWithGoogle } from '../api/firebase';
import { firestore } from '../api/firebase';
import { getDoc, doc, setDoc } from 'firebase/firestore';

export default function Footer() {

  const {currentUserData, setCurrentUserData} = useContext(currentUserContext);

  function handleSignInClick() {
    if (currentUserData) {
      signOut();
    } else {
      signInWithGoogle().then(authUser => {
        console.log(authUser)
        if (authUser) {
          const uid = authUser.uid;
          const docRef = doc(firestore, "users", uid);
          getDoc(docRef).then((docSnap) => {
            if (docSnap.exists()) {
              const userData = docSnap.data();
              setCurrentUserData(userData);
            } else {
              // User does not exist
              const newUser = {
                testimonials: false,
                offerings: false,
                staff: false,
                displayName: authUser.displayName,
                email: authUser.email,
                op: false,
              }
              setDoc(doc(firestore, "users", authUser.uid), newUser).then(res => {
                setCurrentUserData(newUser);
              });
            }
          })
        } else {
          setCurrentUserData(null);
        }
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
          <Text size="$sm">
            Copyright © 2023 Beyond the Bell Educational Services
          </Text>
          { currentUserData && <Text>Logged in as {currentUserData.displayName}</Text>}
          <Button light onClick={handleSignInClick}>
            {currentUserData ? "Log Out" : "Admin Login"}
          </Button>
        </div>
      </div>
    </footer>
  )
}
