// Library Imports
import React from 'react';
import { Navbar as NextUINavbar, Dropdown, Text, Image, Button, Link, Divider } from "@nextui-org/react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';

import { SchoolDaysIcon, AfterSchoolIcon, ContractIcon, ScholarshipIcon, iconFills } from './Icons';

import { afterSchoolFormLink, callLink, facebookLink, mapsLink, mailLink, schoolContractLink, schoolDayFormLink, scholarshipLink, } from '../api/links';

import logoBlack from "../assets/images/logoTransparentBlack.png";

// Style Imports
import "../assets/style/navbar.css";
import "../assets/style/layout.css";
import { btbOrange } from '../assets/style/colors';

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
    <NextUINavbar.Content enableCursorHighlight activeColor="primary" className="d-none d-lg-flex flex-row justify-content-end px-2">
      <NextUINavbar.Link 
        isActive={checkLinkActive("home")}
        href="home"
        itemCss={{fontSize: navbarItemFontSize}}
        className="mx-1"
        css={{display: "inline-block", whiteSpace: "nowrap"}}
      >
        Home
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("about")}
        href="about"
        itemCss={{fontSize: navbarItemFontSize}}
        className="mx-1"
        css={{display: "inline-block", whiteSpace: "nowrap"}}
      >
        Who We Are
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("services")}
        href="services"
        itemCss={{fontSize: navbarItemFontSize}}
        className="mx-1"
        css={{display: "inline-block", whiteSpace: "nowrap"}}
      >
        Services
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("contact")}
        href="contact"
        itemCss={{fontSize: navbarItemFontSize}}
        className="mx-1"
        css={{display: "inline-block", whiteSpace: "nowrap"}}
      >
        Contact
      </NextUINavbar.Link>
    </NextUINavbar.Content>
  )
}

export function Navbar() {

  const collapseItems = [
    {
      name: "Home",
      href: "home",
    },
    {
      name: "Who We Are",
      href: "about",
    },
    {
      name: "Services",
      href: "services",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ];

  return (
    <NextUINavbar 
      height="80px"
      variant="sticky"
      maxWidth="xl"
    > 
      <div className="d-flex flex-row align-items-center justify-content-start gap-2" style={{flex: 1}}>  
        <NextUINavbar.Toggle className="px-2 d-inline d-lg-none"/>
        <div className="d-none d-lg-inline">
          <BrandLarge />
        </div>
        <Divider className="d-none d-xxl-inline mx-2" css={{width: "3rem"}}/>
        <NavbarSocials />
      </div>
      <div className="d-flex d-lg-none flex-row align-items-center justify-content-center gap-2" style={{flex: 1}} >
        <BrandLarge />
      </div>
      <div className="d-flex flex-row align-items-center justify-content-end gap-2" style={{flex: 1}} >
        <NavbarPages />
        <NavbarScheduleDropdown />
        <NavbarScheduleDropdownSmall />
      </div>
      
      <NextUINavbar.Collapse >
        {collapseItems.map((item, index) => (
          <NextUINavbar.CollapseItem key={index}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.href}
            >
              {item.name}
            </Link>
          </NextUINavbar.CollapseItem>
        ))}
      </NextUINavbar.Collapse>
    </NextUINavbar>
  )
}

function BrandLarge() {
  return (
    <NextUINavbar.Brand
      className="d--flex flex-row justify-content-start gap-2 "
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
    </NextUINavbar.Brand>
  )
}

function NavbarSocials() {

  return (
    <div className="d-none d-xxl-flex gap-2">
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
    <NextUINavbar.Content className="d-none d-lg-flex flex-row justify-content-end px-2">
      <Dropdown isBordered>
        <NextUINavbar.Item
          css={{
          fontSize: navbarItemFontSize
        }}>
          <Dropdown.Button bordered>
            Schedule
          </Dropdown.Button>
        </NextUINavbar.Item>
        <Dropdown.Menu
          aria-label="btb-schedule"
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

function NavbarScheduleDropdownSmall() {

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
    <NextUINavbar.Content className="d-flex d-lg-none flex-row justify-content-end">
      <Dropdown isBordered>
        <NextUINavbar.Item
          css={{
          fontSize: navbarItemFontSize
        }}>
          <Dropdown.Button bordered iconRight={<svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path fill={btbOrange} d="M700-80v-120H580v-60h120v-120h60v120h120v60H760v120h-60Zm-520-80q-24 0-42-18t-18-42v-540q0-24 18-42t42-18h65v-60h65v60h260v-60h65v60h65q24 0 42 18t18 42v302q-15-2-30-2t-30 2v-112H180v350h320q0 15 3 30t8 30H180Zm0-470h520v-130H180v130Zm0 0v-130 130Z"/></svg>} />
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