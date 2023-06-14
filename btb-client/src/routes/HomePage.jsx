import React, { useState } from 'react'

import { Button, Collapse, Text, Card, Modal, Link, Tooltip } from "@nextui-org/react";

import { OrangeBar, PageHeader } from "../components/Bar"

import "../assets/style/homepage.css"
import { FormModal } from '../components/Forms';


import hulaFrog from "../assets/images/hulafrog-2020.jpg"
import { useContext } from 'react';
import { testimonialContext , offeringContext} from '../api/context';

export default function HomePage() {

  const [formModalOpen, setFormModalOpen] = useState(false);
  const [testimonialModalOpen, setTestimonialMenuOpen] = useState(false);

  const [currentTestimonial, setCurrentTestimonial] = useState({
    preview: "",
    authorDescription: "",
    image: null,
    message: "",
  });
  
  const {offeringData} = useContext(offeringContext);

  const {testimonialData} = useContext(testimonialContext)

  return (
    <div className="d-flex flex-column">
      <Modal 
        closeButton
        width="50vw"
        open={testimonialModalOpen}
        blur
        onClose={() => setTestimonialMenuOpen(false)}
      >
        <Modal.Body>
          <div className="container-fluid">
            <div className="row d-flex flex-row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-12">
                <img src={currentTestimonial.image} alt={currentTestimonial.authorDescription} className="img-shadow"/>
              </div>
              <div className="col-lg-8 p-3 col-md-12 d-flex flex-column justify-content-center text-center">
                <Text size="$lg">
                  "{currentTestimonial.message}"
                </Text>
                <Text>
                  {currentTestimonial.authorDescription}
                </Text>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex flex-row align-items-center justify-content-center w-100">
            <Button auto flat color="error" onPress={() => setTestimonialMenuOpen(false)} >
                Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <FormModal open={formModalOpen} setOpen={setFormModalOpen} />
      <section className="home-image d-flex flex-column w-100 align-items-center justify-content-center">
        <Text 
          h2
          color="white"
          css={{ 
            textShadow: "0px 0px 5px black",
          }}
        >
          Welcome to
        </Text>
        <Text 
          h1
          css={{ 
            fontSize: "6em",
            filter: "drop-shadow(2px 2px 5px black)",
            textGradient: "45deg, $yellow600 -20%, $btbOrange600 100%",
          }}
        >
          Beyond The Bell <br /> Educational Services
        </Text>
        <Text 
          h1
          color="white"
          css={{ 
            textShadow: "0px 0px 5px black",
          }}
        >
          Academic enrichment, tutoring, and educational <br/> support programs for today’s learners.
        </Text>
        <div className="d-flex flex-row align-items-center gap-5 mt-5">
          <Button
            bordered
            rounded
            color="gradient"
            size="xl"
            onClick={() => setFormModalOpen(true)}
          >
            Schedule
          </Button>
        </div>
      </section>
      <div className="rainbow-line" />
      <section className="container-fluid d-flex flex-column align-items-center p-5">  
        <Text h1 color="primary">
          What's Happening Now At BTB
        </Text>
        <div className="row w-75 d-flex flex-row justify-content-center">
          { renderOfferings() }
        </div>
      </section>
      <section className="bg-blue p-5">
          <Text h1 color="white">
            What Parents Are Saying
          </Text>
          <div className="container-fluid my-5" >
            <div className="row">
              { renderTestimonials() }
            </div>
          </div>
      </section>
    </div>
  )

  function renderOfferings() {
    return offeringData.map((o, index) => {
      return (
        <ClassOffering key={index} offering={o} />
      )
    })
  }

  function renderTestimonials() {
    return testimonialData.map((t, index) => {
      return (
        <Testimonial 
          key={index}
          testimonial={t}
        >
          "{t.message}"
        </Testimonial>
      )
    })
  }

  function Testimonial(props) {

    function handleTestimonialPress() {
      setTestimonialMenuOpen(true);
      setCurrentTestimonial(props.testimonial);
    }
  
    return (
      <Tooltip 
        content="Click to Expand" 
        className="col-xl-4 col-lg-12 p-2"
      >
        <Card 
          isPressable 
          isHoverable 
          css={{
            padding: "2rem", 
            height: "100%"
            }}
            onPress={handleTestimonialPress}
        >
          <Card.Body>
              <div className="text-center d-flex flex-column align-items-center justify-content-between h-100">
                <img src={props.testimonial.image} alt="testimonial-img" className="testimonial-img"/>
                <Text size="$lg">
                  "{props.testimonial.preview}"
                </Text>
                <Text>
                  {props.testimonial.authorDescription}
                </Text>
              </div>
          </Card.Body>
        </Card>
      </Tooltip>
    )
  }
}

function ClassOffering({offering}) {
  return (
    <div className="col-xxl-3 col-xl-4 col-md-6 p-3">
      <Card isHoverable isPressable css={{minHeight: "100%"}} className="d-flex flex-column justify-content-between">
        <Card.Image
          src={offering.image}
          objectFit='fill'
          width="100%"
          alt={offering.title}
        />
        <Card.Footer className="d-flex flex-column align-items-center gap-2 p-2">
          <Text b>          
            {offering.title}
          </Text>
          <Text size="$sm" color="textSecondary">          
            {offering.schedule}
          </Text>
          <Button bordered size="md">
            Read More
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}