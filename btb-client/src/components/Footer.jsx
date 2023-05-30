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
      <div className="footer-content">
        <div className="d-flex flex-row align-items-center justify-content-space-between">
          <div className="d-flex flex-column align-items-center m-5 w-100 gap-2">
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
          <div className="d-flex flex-column align-items-center m-5 w-100 gap-2">
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
          <div className="d-flex flex-column align-items-center m-5 w-100">
            <Text>
              <Link color="primary">
                Who We Are
              </Link>
            </Text>
            <Text>
              <Link color="primary">
                Services
              </Link>
            </Text>
            <Text>
              <Link color="primary">
                Services Your Service
              </Link>
            </Text>
            <Text>
              <Link color="primary">
                Contact Us
              </Link>
            </Text>
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
