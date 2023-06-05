import { Grid, Text, Link, Button } from '@nextui-org/react'
import React from 'react'
import logo from "../assets/images/logoTransparent.png";
import footerBackground from "../assets/images/footerBackground.png";

import PlaceIcon from '@mui/icons-material/Place';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LanguageIcon from '@mui/icons-material/Language';

import { btbOrange } from '../assets/style/colors';

export default function Footer() {
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
              <Text size="$xl">
                3 Man-Mar Drive #14 <br /> Plainville, MA 02762
              </Text>
              <Text size="$xl">
                questions@beyondthebelleducation.com <br /> (508) 316-4751
              </Text>
            </div>
            <div className="col-lg-12 col-xl-4 d-flex flex-column align-items-center">
              <Text h2>
                Hours
              </Text>
              <Text size="$xl">
                Monday - Friday 8am to 6pm
              </Text>
              <Text size="$xl">
                Other hours available by appointment
              </Text>
              <Button
                color="primary"
                rounded
                shadow
                size="xl"
              >
                Schedule A Session
              </Button>
            </div>
            <div className="col-lg-12 col-xl-3 d-flex flex-column align-items-center">
              <Text>
                <Link block color="primary">
                  Who We Are
                </Link>
              </Text>
              <Text>
                <Link block color="primary">
                  Services
                </Link>
              </Text>
              <Text>
                <Link block color="primary">
                  Services Your Service
                </Link>
              </Text>
              <Text>
                <Link block color="primary">
                  Contact Us
                </Link>
              </Text>
            </div>
          </div>
        </div>
        <div className="fill-line mb-3" />
        <Text size="$sm">
          Copyright © 2023 Beyond the Bell Educational Services
        </Text>
      </div>
    </footer>
  )
}
