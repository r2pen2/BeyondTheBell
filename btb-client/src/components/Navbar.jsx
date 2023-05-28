// Library Imports
import React from 'react';
import { Navbar as NextUINavbar, Dropdown, Row, Col, Image } from "@nextui-org/react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';

// Style Imports
import "../assets/style/navbar.css";
import "../assets/style/layout.css";

// Component Imports
import { btbOrange, btbTextSecondary } from "../assets/style/colors";
import logo from "../assets/images/logo176.png";

/**
 * Header component for BeyondTheBell. Position is relative, but this may change.
 * @returns {React.Component} - Header containing a logo, navigation, and external links 
 */
export function Socials() {

  return (
    <header className="w-100 d-flex align-items-center flex-column gap-2 mb-2 socials">
      <div className="d-flex flex-row align-items-center justify-content-end gap-4">
        <div className="gap-1 d-flex flex-row align-items-center">
          <LocalPhoneIcon sx={{color: "#b9b9b9", fontSize: 20 }}/>
          <a href="callto:5083164751" className="social-anchor" target='blank'>
            <strong>
              <font color={btbOrange}>
                (508) 316-4751
              </font>
            </strong>
          </a>
        </div>
        <div className="gap-1 d-flex flex-row align-items-center">
          <EmailIcon sx={{color: "#b9b9b9", fontSize: 20}}/>
          <a href="mailto:questions@beyondthebelleducation.com" className="social-anchor" target='blank'>
            <font color={btbTextSecondary}>
              questions@beyondthebelleducation.com
            </font>
          </a>
        </div>
        <div className="gap-1 d-flex flex-row text-align-center">
          <LocationOnIcon sx={{color: "#b9b9b9", fontSize: 20}}/>
          <a href="https://goo.gl/maps/huC9JcTuWy1PebMP7" className="social-anchor" target='blank'>
            <font color={btbTextSecondary}>
              3 Man-Mar Drive, Unit #14, Plainville, MA 02762
            </font>
          </a>
        </div>
        <div className="gap-1 d-flex flex-row text-align-center">
          <FacebookIcon sx={{color: "#b9b9b9", fontSize: 20}}/>
          <a href="https://www.facebook.com/beyondthebelled/" className="social-anchor" target='blank'>
            <font color={btbTextSecondary}>
              Beyond The Bell Educational Services
            </font>
          </a>
        </div>
      </div>
    </header>
  )
}

export function NavbarContent() {

  const navbarItemFontSize = "20px";

  return (
    <NextUINavbar.Content hideIn="xs" enableCursorHighlight >
      <Dropdown isBordered>
        <NextUINavbar.Item
          css={{
            fontSize: navbarItemFontSize
          }}
        >
          <Dropdown.Button
            auto
            light
            css={{
              px: 0,
              dflex: "center",
              svg: { pe: "none" },
            }}
            iconRight={<ExpandMoreIcon />}
            ripple={false}
          >
            Who We Are
          </Dropdown.Button>
        </NextUINavbar.Item>
        <Dropdown.Menu
          aria-label="BTB About"
          css={{
            $$dropdownMenuWidth: "340px",
            $$dropdownItemHeight: "70px",
            "& .nextui-dropdown-item": {
              py: "$4",
              // dropdown item left icon
              svg: {
                color: "$secondary",
                mr: "$4",
              },
              // dropdown item title
              "& .nextui-dropdown-item-content": {
                w: "100%",
                fontWeight: "$semibold",
              },
            },
          }}
        >
          <Dropdown.Item
            key="about"
            showFullDescription
            description="See why parents love Beyond The Bell!"
            icon={<NotificationsIcon />}
          >
            About Beyond The Bell
          </Dropdown.Item>
          <Dropdown.Item
            key="testimonials"
            showFullDescription
            description="See why parents love BTB!"
            icon={<ThumbUpIcon />}
          >
            Testimonials
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <NextUINavbar.Link 
        href="our-services"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Services
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        href="schedule-your-service"
        itemCss={{fontSize: navbarItemFontSize, color: "#a31a60", fontWeight: "bold"}}
      >
        Schedule Your Service
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        href="contact-btb"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Contact
      </NextUINavbar.Link>
    </NextUINavbar.Content>
  )
}