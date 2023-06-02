import React from 'react'

import { Button, Collapse, Grid, Input, Link, Spacer, Text, Textarea } from "@nextui-org/react";

import "../assets/style/services.css"
import PageHeader from '../components/PageHeader';
import homeworkSpace from "../assets/images/about-us-homework-space2.jpg"
import afterSchool from "../assets/images/after-school.jpg"
import dyslexia from "../assets/images/wilson-reading-tutoring.jpg"
import tutoring from "../assets/images/tutoring-placeholder.jpg"
import SchoolIcon from '@mui/icons-material/School';
import { btbOrange } from '../assets/style/colors';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import EditIcon from '@mui/icons-material/Edit';
import { Socials } from '../components/Navbar';

export default function Contact() {
  return (
    <div className="d-flex flex-column align-items-center">
      <PageHeader text="Contact / Register" />
      <section className="d-flex flex-row justify-content-center m-5 w-80">
        <ContactForm />
      </section>
    </div>
  )
}

function ContactForm() {
  return (
    <div className="gap-2 d-flex flex-column align-items-start justify-content-center">
      <div className="container-fluid d-flex flex-column gap-2">
        <div className="row">
          <Text h1 align="start">
            We Would Love To Hear From You!
          </Text>
          <Text align="start">
            Do you want to see how you can take the next step in supporting your child’s educational growth? Drop us a line with any questions. We’re here to help!
          </Text>
        </div>
        <div className="row">
          <Input clearable bordered label="Your Name" fullWidth css={{display: "flex", alignItems: "start"}} />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <Input clearable bordered label="Your phone" fullWidth css={{display: "flex", alignItems: "start"}} />
          </div>      
          <div className="col-lg-6 col-md-12">
            <Input clearable bordered label="Your email" fullWidth css={{display: "flex", alignItems: "start"}} />
          </div>      
        </div>
        <div className="row">
          <Input clearable bordered label="Preferred contact method" fullWidth css={{display: "flex", alignItems: "start"}} />
        </div>
        <div className="row">
          <Input clearable bordered label="City, State" fullWidth css={{display: "flex", alignItems: "start"}} />
        </div>
        <div className="row">
          <Textarea bordered label="How can we help?" placeholder="Tell us what you're looking for." fullWidth css={{display: "flex", alignItems: "start"}} />
        </div>
      </div>
      <div className="d-flex justify-content-center w-100 mt-3">
        <Button color="primary" shadow>
          Submit
        </Button>
      </div>
    </div>
  )
}