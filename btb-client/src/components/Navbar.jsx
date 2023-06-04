// Library Imports
import React from 'react';
import { Navbar as NextUINavbar, Dropdown, Text, Col, Image } from "@nextui-org/react";
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

const SCHOOL_DAY_FORM_LINK = "https://form.jotform.com/202455598017156";
const AFTER_SCHOOL_FORM_LINK = "https://form.jotform.com/202456816734156";
const SCHOOL_CONTRACT_LINK = "https://beyondthebelleducation.com/pdf/Contract2020-21schoolyearforfamilies.pdf";
const SCHOLARSHIP_LINK = "https://form.jotform.com/202458061676054";

/**
 * Header component for BeyondTheBell. Position is relative, but this may change.
 * @returns {React.Component} - Header containing a logo, navigation, and external links 
 */
export function Socials() {

  return (
    <section className="w-100 d-flex align-items-center flex-column gap-2 socials">
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
    </section>
  )
}

const navbarItemFontSize = "20px";

export function NavbarContent() {

  function checkLinkActive(route) {
    const location = window.location.pathname;
    if (route === "home" && window.location.pathname.length < 1) {
      return true;
    }
    return location.includes(route);
  }

  function handleDropdownMenuAction(key) {
    console.log(key)
    let link = null;
    switch (key) {
      case "school-days":
        link = SCHOOL_DAY_FORM_LINK;
        break;
      case "after-school":
        link = AFTER_SCHOOL_FORM_LINK;
        break;
      case "contract":
        link = SCHOOL_CONTRACT_LINK;
        break;
      case "scholarship":
        link = SCHOLARSHIP_LINK;
        break;
      default:
        break;
    }
    if (link) {
      window.open(link, "_blank");
    }
  }

  return (
    <NextUINavbar.Content hideIn="xs" enableCursorHighlight activeColor="primary" >
      <NextUINavbar.Link 
        isActive={checkLinkActive("home")}
        href="home"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Home
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("about")}
        href="about"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Who We Are
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("services")}
        href="services"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Services
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("contact")}
        href="contact"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Contact
      </NextUINavbar.Link>
      <Dropdown isBordered>
        <NextUINavbar.Item
          css={{
          fontSize: navbarItemFontSize
        }}>
          <Dropdown.Button
            shadow
          >
            Schedule
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
          onAction={handleDropdownMenuAction}
        >
          <Dropdown.Item
            key="school-days"
            description="Click to open application"
            icon={<SchoolDaysIcon />}
          >
            School Days at BTB
          </Dropdown.Item>
          <Dropdown.Item
            key="after-school"
            description="Click to open application"
            icon={<AfterSchoolIcon />}
          >
            After School at BTB
          </Dropdown.Item>
          <Dropdown.Item
            withDivider
            key="contract"
            description="Click to open contract"
            icon={<ContractIcon />}
          >
            Contract for 2020/21 School Year
          </Dropdown.Item>
          <Dropdown.Item
            withDivider
            key="scholarship"
            description="Click to open application"
            icon={<ScholarshipIcon />}
          >
            The Little Fiddle Scholarship
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </NextUINavbar.Content>
  )
}

const SchoolDaysIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#f05c21"><path d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z"/></svg>
  )
}

const AfterSchoolIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#009bdf"><path d="m627-287 45-45-159-160v-201h-60v225l174 181ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480-820q-140 0-240 100T140-480q0 140 100 240t240 100Z"/></svg>
  )
}

const ContractIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#f0214e"><path d="M180-120q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q24.75 0 42.375 17.625T840-780v600q0 24.75-17.625 42.375T780-120H180Zm0-60h600v-600H180v600Zm100-100h273v-60H280v60Zm0-170h400v-60H280v60Zm0-170h400v-60H280v60Zm200-177q14 0 24.5-10.5T515-832q0-14-10.5-24.5T480-867q-14 0-24.5 10.5T445-832q0 14 10.5 24.5T480-797ZM180-180v-600 600Z"/></svg>
  );
};

const ScholarshipIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#00ae17"><path d="M321-160q-24 0-42-18t-18-42v-100h124v-127q-38 3-76-10.5T241-500v-58h-50L60-689q36-34 86-55.5T248-766q30 0 68.5 9.5T385-726v-74h455v535q0 44-30.5 74.5T735-160H321Zm124-160h245v55q0 20 12.5 32.5T735-220q20 0 32.5-12.5T780-265v-475H445v57l241 241v43h-43L517-525l-17 20q-13 15-26 23t-29 15v147ZM218-618h83v89q17 11 33.5 16.5T368-507q25 0 51-13.5t38-27.5l17-20-69-69q-32-32-72-50.5T248-706q-27 0-49 6.5T154-682l64 64Zm412 358H321v40h323q-6-6-10-16.5t-4-23.5Zm-309 40v-40 40Z"/></svg>
  )
}