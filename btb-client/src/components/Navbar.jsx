// Library Imports
import React from 'react';
import { Navbar as NextUINavbar, Dropdown, Text, Image, Button } from "@nextui-org/react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';

import { SchoolDaysIcon, AfterSchoolIcon, ContractIcon, ScholarshipIcon, iconFills } from './Icons';

import { afterSchoolFormLink, callLink, facebookLink, mapsLink, mailLink, schoolContractLink, schoolDayFormLink, scholarshipLink, } from '../api/links';

import logoBlack from "../assets/images/logoBlack.png";

// Style Imports
import "../assets/style/navbar.css";
import "../assets/style/layout.css";

const navbarItemFontSize = "20px";

export function NavbarPages() {

  function checkLinkActive(route) {
    const location = window.location.pathname;
    if (route === "home" && window.location.pathname.length < 2) {
      return true;
    }
    return location.includes(route);
  }

  return (
    <NextUINavbar.Content enableCursorHighlight activeColor="primary">
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
    </NextUINavbar.Content>
  )
}

export function Navbar() {
  return (
    <NextUINavbar 
      height="80px"
      variant="sticky"
      maxWidth="xl"
    >
      <BrandSmall />
      <BrandLarge />
      <NavbarPages />
      <div className="d-flex flex-row align-items-center justify-content-center gap-2 w-25" >
        <NavbarSocials />
        <NavbarScheduleDropdown />
      </div>
    </NextUINavbar>
  )
}

function BrandSmall() {
  return (
    <NextUINavbar.Brand
      showIn="md"
      hideIn="xs"
    >
      <div 
        className="navbar-brand-content"
        onClick={() => window.location = "/"}
      >
        <Image
          width={40}
          height={40}
          src={logoBlack}
          alt="logo-black"
        />
      </div>
    </NextUINavbar.Brand>
  )
}

function BrandLarge() {
  return (
    <NextUINavbar.Brand
      hideIn="md"
      css={{width: "25%"}}
    >
      <div 
        className="navbar-brand-content"
        onClick={() => window.location = "/"}
      >
        <Image
          width={40}
          height={40}
          src={logoBlack}
          alt="logo-black"
        />
        <Text b css={{fontSize: 20, marginLeft: "0.5em"}}>
          Beyond The Bell
        </Text>
      </div>
    </NextUINavbar.Brand>
  )
}

function NavbarSocials() {

  return (
    <NextUINavbar.Content hideIn="md" enableCursorHighlight activeColor="primary">
      <div className="d-flex flex-row align-items-center justify-content-end gap-2">
        <Button
          light
          auto
          icon={<LocalPhoneIcon />}
          onClick={() => window.open(callLink)}
        />
        <Button
          light
          auto
          icon={<EmailIcon />}
          onClick={() => window.open(mailLink)}
        />
        <Button
          light
          auto
          icon={<LocationOnIcon />}
          onClick={() => window.open(mapsLink, "_blank")}
        />
        <Button
          light
          auto
          icon={<FacebookIcon />}
          onClick={() => window.open(facebookLink, "_blank")}
        />
      </div>
    </NextUINavbar.Content>
  )
}

function NavbarScheduleDropdown() {

  function handleDropdownMenuAction(key) {
    console.log(key)
    let link = null;
    switch (key) {
      case "school-days":
        link = schoolDayFormLink;
        break;
      case "after-school":
        link = afterSchoolFormLink;
        break;
      case "contract":
        link = schoolContractLink;
        break;
      case "scholarship":
        link = scholarshipLink;
        break;
      default:
        break;
    }
    if (link) {
      window.open(link, "_blank");
    }
  }

  return (
    <NextUINavbar.Content hideIn="xs">
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
            icon={<SchoolDaysIcon fill={iconFills.orange} />}
          >
            School Days at BTB
          </Dropdown.Item>
          <Dropdown.Item
            key="after-school"
            description="Click to open application"
            icon={<AfterSchoolIcon fill={iconFills.red} />}
          >
            After School at BTB
          </Dropdown.Item>
          <Dropdown.Item
            withDivider
            key="contract"
            description="Click to open contract"
            icon={<ContractIcon fill={iconFills.blue} />}
          >
            Contract for 2020/21 School Year
          </Dropdown.Item>
          <Dropdown.Item
            withDivider
            key="scholarship"
            description="Click to open application"
            icon={<ScholarshipIcon fill={iconFills.green} />}
          >
            The Little Fiddle Scholarship
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </NextUINavbar.Content>
  )
}