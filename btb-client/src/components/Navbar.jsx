// Library Imports
import React from 'react';
import { Navbar as NextUINavbar, Dropdown, Row, Col, Image, Text } from "@nextui-org/react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
export default function Navbar() {

  return (
    <header>
      <Row
        justify="space-between"
        align="center"
        css={{
          padding: "3em",
          height: "200px"
        }}
      >
        <Image
          width={176}
          height={176}
          src={logo}
          alt="logo"
        />
        <Col>
          <Socials />
          <NextUINavbar 
            height="80px"
            disableShadow
            css={{
              justifyContent: "flex-end",
            }}
            containerCss={{
              justifyContent: "flex-end",
            }}
          >
            <NavbarContent />
          </NextUINavbar>
        </Col>
      </Row>
    </header>
  )
}

function NavbarContent() {

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
        itemCss={{fontSize: navbarItemFontSize}}
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

function Socials() {

  return (
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
    </div>
  );
}