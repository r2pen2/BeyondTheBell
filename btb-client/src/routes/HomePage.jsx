import React, { useState } from 'react'

import { Button, Collapse, Text, Card, Modal, Link, Tooltip } from "@nextui-org/react";

import { OrangeBar, PageHeader } from "../components/Bar"

import Carousel from "react-material-ui-carousel";

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
        width="80vw"
        open={testimonialModalOpen}
        blur
        onClose={() => setTestimonialMenuOpen(false)}
      >
        <Modal.Body>
          <div className="container-fluid">
            <div className="row d-flex flex-row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-12 d-flex flex-row justify-content-center">
                <img src={currentTestimonial.image} alt={currentTestimonial.authorDescription} className="img-shadow" style={{maxHeight: "50vw"}}/>
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
      <section className="home-image d-flex flex-column w-100 align-items-center justify-content-center p-5">
        <Text 
          h2
          color="white"
          css={{ 
            textShadow: "0px 0px 5px black",
          }}
          className="d-lg-inline d-none"
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
          Beyond The Bell <br /> <span className='d-none d-xxl-inline'>Educational Services</span>
        </Text>
        <Text 
          h1
          color="white"
          css={{ 
            textShadow: "0px 0px 5px black",
          }}
          className="d-none d-md-inline"
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
        <div className="d-xxl-flex d-none w-100 align-items-center flex-row justify-content-center">
          <BTBCarousel>
            { renderOfferings(4) }  
          </BTBCarousel>
        </div>
        <div className="d-xl-flex d-xxl-none d-none w-100 align-items-center flex-row justify-content-center">
          <BTBCarousel>
            { renderOfferings(3) }  
          </BTBCarousel>
        </div>
        <div className="d-lg-flex d-xl-none d-none w-100 align-items-center flex-row justify-content-center">
          <BTBCarousel>
            { renderOfferings(2) }  
          </BTBCarousel>
        </div>
        <div className="d-flex flex-column d-lg-none align-items-center w-100">
          { renderOfferingsList() }
        </div>
      </section>
      <section className="bg-blue p-5">
          <Text h1 color="white">
            What Parents Are Saying
          </Text>
          <div className="container-fluid my-5" >
            <div className="d-xxl-flex d-none w-100 align-items-center flex-row justify-content-center">
              <BTBCarousel>
                { renderTestimonials(3) }  
              </BTBCarousel>
            </div>
            <div className="d-lg-flex d-xxl-none d-none w-100 align-items-center flex-row justify-content-center">
              <BTBCarousel>
                { renderTestimonials(2) }  
              </BTBCarousel>
            </div>
            <div className="d-md-flex d-lg-none d-none w-100 align-items-center flex-row justify-content-center">
              <BTBCarousel>
                { renderTestimonials(1) }
              </BTBCarousel>
            </div>
          </div>
      </section>
    </div>
  )

  function BTBCarousel(props) {
    return (
      <Carousel swipe={false} animation="slide" navButtonsAlwaysVisible className="w-100" autoPlay={false}>
        {props.children}
      </Carousel>
    )
  }

  function renderOfferingsList() {
    return offeringData.map((o, index) => {
      return (
        <Card
          isPressable
          isHoverable
          key={"ol-" + index}
          css={{
            height: "200px",
            width: "100%",
          }}
          className="w-100 p-2 m-2 d-flex flex-row align-items-center justify-content-between"
        >
          <img src={o.image} alt={o.title} style={{height: "100%", objectFit:"cover"}} className="img-shadow"/>
          <div className="d-flex w-100 flex-column px-2 text-center justify-content-center">
            <Text b>
              {o.title}
            </Text>
            <Text>
              {o.schedule}
            </Text>
            <div className="d-flex flex-row w-100 justify-content-center">
              <Button bordered size="md" style={{minHeight:"2rem", maxWidth: "50%"}}>
                Read More
              </Button>
            </div>
          </div>
        </Card>
      )
    })
  }

  function renderOfferings(itemsPerCarousel) {

    const offeringPages = splitArray(offeringData, itemsPerCarousel);
    
    function renderPage(op) {


      const col = 12/op.length;

      return op.map((o, index) => {
        return <ClassOffering col={col} offering={o} key={`o-${index}`}/>
      })
    }

    return offeringPages.map((op, index) => {
      return (
        <div className="w-100 d-flex flex-row justify-content-center" key={`op-${index}`}>
          <div className="row line-underneath px-5" style={{minHeight: "600px"}}>
            { renderPage(op) }
          </div>
        </div>
      )
    })
  }

  function renderTestimonials(itemsPerCarousel) {

    const testimonialPages = splitArray(testimonialData, itemsPerCarousel);
    
    function renderPage(tp) {


      const col = 12/tp.length;

      return tp.map((t, index) => {
        return <Testimonial testimonial={t} col={col} key={`o-${index}`}/>
      })
    }

    return testimonialPages.map((tp, index) => {
      return (
        <div className="w-100 d-flex flex-row justify-content-center" key={`tp-${index}`}>
          <div className="row line-underneath px-5" style={{minHeight: "600px"}}>
            { renderPage(tp) }
          </div>
        </div>
      )
    })
  }

  function splitArray(inputArray, chunkSize) {
    let result = [];
    for (var i = 0; i < inputArray.length; i += chunkSize) {
        result.push(inputArray.slice(i, i + chunkSize));
    }
    return result;
  }

  function Testimonial(props) {

    console.log(props.testimonial)

    function handleTestimonialPress() {
      setTestimonialMenuOpen(true);
      setCurrentTestimonial(props.testimonial);
    }
  
    return (
      <Tooltip 
        content="Click to Expand" 
        className={`col-${props.col} p-3`}
      >
        <Card 
          isPressable 
          isHoverable 
          css={{
            height: "100%",
            }}
            onPress={handleTestimonialPress}
        >
          <Card.Body>
              <div className="text-center d-flex flex-column align-items-center justify-content-between h-100">
                <img src={props.testimonial.image} alt="testimonial-img" className="testimonial-img"/>
                <Text>
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

function ClassOffering({offering, col}) {
  return (
    <div className={`col-${col} p-3`} style={{height: "500px"}}>
      <Card isHoverable isPressable css={{height: "500px"}} className="d-flex flex-column justify-content-between">
        <Card.Image
          src={offering.image}
          objectFit='fill'
          width="100%"
          alt={offering.title}
          height="100%"
        />
        <div className="d-flex flex-column align-items-center gap-2 p-2">
          <Text b>          
            {offering.title}
          </Text>
          <Text size="$sm" color="textSecondary">          
            {offering.schedule}
          </Text>
          <Button bordered size="md" style={{minHeight:"2rem"}}>
            Read More
          </Button>
        </div>
      </Card>
    </div>
  )
}