import { Grid, Text, Link } from '@nextui-org/react'
import React from 'react'

import PlaceIcon from '@mui/icons-material/Place';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LanguageIcon from '@mui/icons-material/Language';

import { btbOrange } from '../assets/style/colors';

const footerIconSize = "60px";
const footerTextFontSize = "24px";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-row">
            <PlaceIcon sx={{color: btbOrange, fontSize: footerIconSize}} />
            <div className="d-flex flex-column">
              <Text b color="primary">
                Location
              </Text>
              <Text>
                3 Man-Mar Drive, Unit #14 <br /> Plainville, MA 02762
              </Text>
            </div>
          </div>
          <div className="col d-flex flex-row">
            <ScheduleIcon sx={{color: btbOrange, fontSize: footerIconSize}} />
            <div className="d-flex flex-column">
              <Text b color="primary">
                Our Hours
              </Text>
              <Text>
                Monday-Friday 8am-6pm <br /> Other hours available by appointment.
              </Text>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex flex-row align-items-center">
            <PhoneIphoneIcon sx={{color: btbOrange, fontSize: footerIconSize}} />
            <div className="d-flex flex-column">
              <Text>
                <Link href="/about-btb" color="primary" underline css={{fontSize: footerTextFontSize}}>
                    Contact Us
                </Link>
              </Text>
              <div className="fill-line"></div>
              <Text>
                (508) 316-4751 <br /> questions@beyondthebelleducation.com
              </Text>
            </div>
          </div>
          <div className="col d-flex flex-row">
            <LanguageIcon sx={{color: btbOrange, fontSize: footerIconSize}} />
            <div className="d-flex flex-column">
              <Text b color="primary">
                Stay Connected
              </Text>
              <Text>
                (508) 316-4751 <br /> questions@beyondthebelleducation.com
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
