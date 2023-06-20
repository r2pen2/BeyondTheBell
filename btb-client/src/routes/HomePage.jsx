import React, { useEffect, useState } from 'react'

import { Button, Collapse, Text, Card, Modal, Link, Tooltip, Textarea } from "@nextui-org/react";


import { OrangeBar, PageHeader } from "../components/Bar"

import Carousel from "react-material-ui-carousel";

import "../assets/style/homepage.css"
import { FormModal } from '../components/Forms';


import { useContext } from 'react';
import { testimonialContext , offeringContext} from '../api/context';
import { auth, firestore } from '../api/firebase';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { IconButton, TextField } from '@mui/material';
import { PencilIcon } from '../components/Icons';

export default function HomePage() {

  const [formModalOpen, setFormModalOpen] = useState(false);
  const [testimonialModalOpen, setTestimonialModalOpen] = useState(false);
  const [offeringModalOpen, setOfferingModalOpen] = useState(false);

  const [testimonialEdit, setTestimonialEdit] = useState(false);
  const [offeringEdit, setOfferingEdit] = useState(false);

  const [userCanEditTestimonials, setUserCanEditTestimonials] = useState(false)
  const [userCanEditOfferings, setUserCanEditOfferings] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        fetchUserPermissions();
      } else {
        setUserCanEditTestimonials(false);
        setUserCanEditOfferings(false);
      }
    })
  })

  function fetchUserPermissions() {
    const docRef = doc(firestore, "users", auth.currentUser.uid);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setUserCanEditTestimonials(data.testimonials);
        setUserCanEditOfferings(data.offerings);
      }
    })
  }

  useEffect(() => {
    if (auth.currentUser) {
      fetchUserPermissions();
    }
  })

  const [currentTestimonial, setCurrentTestimonial] = useState({
    preview: "",
    authorDescription: "",
    image: null,
    message: "",
    id: "",
  });

  const [currentOffering, setCurrentOffering] = useState({
    description: "",
    image: null,
    schedule: "",
    title: "",
  });
  
  const {offeringData} = useContext(offeringContext);

  const {testimonialData} = useContext(testimonialContext)

  function closeTestimonialModal() {
    setTestimonialModalOpen(false);
    setTestimonialEdit(false);
  }
  
  function closeOfferingModal() {
    setOfferingModalOpen(false);
    setOfferingEdit(false);
  }


  return (
    <div className="d-flex flex-column">
      <Modal 
        closeButton
        width="80vw"
        open={testimonialModalOpen}
        blur
        onClose={closeTestimonialModal}
      >
        <TestimonialModal />
        <Modal.Footer>
          <div className="d-flex flex-row align-items-center justify-content-center w-100">
            <Button auto flat color="error" onPress={closeTestimonialModal} >
                Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal 
        closeButton
        width="80vw"
        open={offeringModalOpen}
        blur
        onClose={closeOfferingModal}
      >
        <OfferingModal />
        <Modal.Footer>
          <div className="d-flex flex-row align-items-center justify-content-center w-100">
            <Button auto flat color="error" onPress={closeOfferingModal} >
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

  function TestimonialModal() {
    
    const [tempMessage, setTempMessage] = useState(currentTestimonial.message);
    const [tempPreview, setTempPreview] = useState(currentTestimonial.preview);
    const [tempAuthorDesc, setTempAuthorDesc] = useState(currentTestimonial.authorDescription);

    function handleTestimonialMessageChange(e) {
      setTempMessage(e.target.value);
    }

    function handleTestimonialAuthorDescChange(e) {
      setTempAuthorDesc(e.target.value);
    }

    function handleTestimonialPreviewChange(e) {
      setTempPreview(e.target.value);
    }

    function saveChanges() {
      const docRef = doc(firestore, "testimonials", currentTestimonial.id);
      const newData = {...currentTestimonial};
      newData.message = tempMessage;
      newData.authorDescription = tempAuthorDesc;
      newData.preview = tempPreview;
      setDoc(docRef, newData);
      setTestimonialEdit(false);
      setTestimonialModalOpen(false);
    }

    const [deleteWarningVisible, setDeleteWarningVisible] = useState(false);

    function deleteTestimonial() {
      const docRef = doc(firestore, "testimonials", currentTestimonial.id);
      const deleteRef = doc(firestore, "deletedTestimonials", currentTestimonial.id);
      deleteDoc(docRef);
      setDoc(deleteRef, currentTestimonial);
      setTestimonialEdit(false);
      setTestimonialModalOpen(false);
    }

    return (
      <Modal.Body>
      <div className="container-fluid">
        <div className="row d-flex flex-row align-items-center justify-content-center">
          <div className="col-lg-4 col-md-12 gap-3 d-flex flex-column align-items-center">
            <img src={currentTestimonial.image} alt={currentTestimonial.authorDescription} className="img-shadow" style={{maxHeight: "50vw"}}/>
            { testimonialEdit && !deleteWarningVisible &&
              <Button flat auto color="error" onClick={() => setDeleteWarningVisible(true)}>
                Delete Testimonial
              </Button>
            }
            { testimonialEdit && deleteWarningVisible &&
              <Text>
                Are you sure you want to delete this testimonial?
              </Text>
            }
            { testimonialEdit && deleteWarningVisible &&
              <div className="w-100 d-flex flex-row justify-content-around align-items-center">
                <Button flat auto color="success" onClick={() => setDeleteWarningVisible(false)}>
                  Cancel
                </Button>
                <Button flat auto color="error" onClick={deleteTestimonial}>
                  Delete it!
                </Button>
              </div>
            }
          </div>
          <div className="col-lg-8 p-3 gap-3 col-md-12 d-flex flex-column justify-content-center text-center">
            { !testimonialEdit && 
              <Text size="$lg">
                "{tempMessage}"
              </Text>
            }
            { testimonialEdit &&
              <Textarea label="Testimonial Message" placeholder="Enter the full testimonial message" bordered value={tempMessage} onChange={handleTestimonialMessageChange}/>
            }
            { testimonialEdit &&
              <Textarea label="Testimonial Preview" placeholder="This is the shortened preview that shows up on the homepage" bordered value={tempPreview} onChange={handleTestimonialPreviewChange}/>
            }
            { !testimonialEdit && 
              <Text>
                {currentTestimonial.authorDescription}
              </Text>
            }
            { testimonialEdit &&
              <Textarea label="Author Description" placeholder="Enter a description of the testimonial's author" bordered value={tempAuthorDesc} onChange={handleTestimonialAuthorDescChange}/>
            }
            { testimonialEdit &&
              <Button flat auto color="success" onClick={saveChanges}>
                Save Changes
              </Button>
            }
          </div>
        </div>
      </div>
    </Modal.Body>
    )
  }

  
  function OfferingModal() {
    
    const [tempDescription, setTempDescription] = useState(currentOffering.description);
    const [tempTitle, setTempTitle] = useState(currentOffering.title);
    const [tempSchedule, setTempSchedule] = useState(currentOffering.schedule);

    function handleOfferingDescriptionChange(e) {
      setTempDescription(e.target.value);
    }

    function handleOfferingScheduleChange(e) {
      setTempSchedule(e.target.value);
    }

    function handleOfferingTitleChange(e) {
      setTempTitle(e.target.value);
    }

    function saveChanges() {
      const docRef = doc(firestore, "offerings", currentOffering.id);
      const newData = {...currentOffering};
      newData.description = tempDescription;
      newData.schedule = tempSchedule;
      newData.title = tempTitle;
      setDoc(docRef, newData);
      setOfferingEdit(false);
      setOfferingModalOpen(false);
    }

    const [deleteWarningVisible, setDeleteWarningVisible] = useState(false);

    function deleteTestimonial() {
      const docRef = doc(firestore, "offerings", currentOffering.id);
      const deleteRef = doc(firestore, "deletedOfferings", currentOffering.id);
      deleteDoc(docRef);
      setDoc(deleteRef, currentOffering);
      setOfferingEdit(false);
      setOfferingModalOpen(false);
    }

    return (
      <Modal.Body>
      <div className="container-fluid">
        <div className="row d-flex flex-row align-items-center justify-content-center">
          <div className="col-lg-4 col-md-12 gap-3 d-flex flex-column align-items-center">
            <img src={currentOffering.image} alt={currentOffering.title} className="img-shadow" style={{maxHeight: "50vw"}}/>
            { offeringEdit && !deleteWarningVisible &&
              <Button flat auto color="error" onClick={() => setDeleteWarningVisible(true)}>
                Delete Class Offering
              </Button>
            }
            { offeringEdit && deleteWarningVisible &&
              <Text>
                Are you sure you want to delete this class offering?
              </Text>
            }
            { offeringEdit && deleteWarningVisible &&
              <div className="w-100 d-flex flex-row justify-content-around align-items-center">
                <Button flat auto color="success" onClick={() => setDeleteWarningVisible(false)}>
                  Cancel
                </Button>
                <Button flat auto color="error" onClick={deleteTestimonial}>
                  Delete it!
                </Button>
              </div>
            }
          </div>
          <div className="col-lg-8 p-3 gap-3 col-md-12 d-flex flex-column justify-content-center text-center">
            { !offeringEdit && 
              <Text b size="$lg">
                {tempTitle}
              </Text>
            }
            { !offeringEdit && 
              <Text>
                {tempDescription}
              </Text>
            }
            { offeringEdit &&
              <Textarea label="Offering Title" placeholder="Please enter a title for this class offering" bordered value={tempTitle} onChange={handleOfferingTitleChange}/>
            }
            { offeringEdit &&
              <Textarea label="Offering Description" placeholder="Enter the class offering's description" bordered value={tempDescription} onChange={handleOfferingDescriptionChange}/>
            }
            { !offeringEdit && 
              <Text>
                <strong>Schedule:</strong> {currentOffering.schedule}
              </Text>
            }
            { offeringEdit &&
              <Textarea label="Offering Schedule" placeholder="Enter this class offering's schedule" bordered value={tempSchedule} onChange={handleOfferingScheduleChange}/>
            }
            { offeringEdit &&
              <Button flat auto color="success" onClick={saveChanges}>
                Save Changes
              </Button>
            }
          </div>
        </div>
      </div>
    </Modal.Body>
    )
  }

  function renderOfferingsList() {
    return offeringData.map((o, index) => {

      function handleOfferingPress() {
        setOfferingModalOpen(true);
        setCurrentOffering(o);
      }
    
      function editOffering() {
        handleOfferingPress();
        setOfferingEdit(true);
      }
    
      function EditButton() {
        return (
          <IconButton onClick={editOffering} className="m-5">
            <PencilIcon />
          </IconButton>
        )
      }

      return (
        <Card
          isPressable
          isHoverable
          key={"ol-" + index}
          css={{
            height: "200px",
            width: "100%",
          }}
          className="m-2"
        >
          <Card.Body className="w-100 p-2 d-flex flex-row align-items-center justify-content-between">
            <img src={o.image} alt={o.title} style={{height: "100%", objectFit:"cover"}} className="img-shadow"/>
            <div className="d-flex w-100 flex-column px-2 text-center justify-content-center">
              <Text b>
                {o.title}
              </Text>
              <Text>
                {o.schedule}
              </Text>
              <div className="d-flex flex-row w-100 justify-content-center align-items-center">
                <Button bordered size="md" style={{minHeight:"2rem", maxWidth: "50%"}}>
                  Read More
                </Button>
              </div>
            </div>
          { userCanEditOfferings && <EditButton /> }
          </Card.Body>
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

    function handleTestimonialPress() {
      setTestimonialModalOpen(true);
      setCurrentTestimonial(props.testimonial);
    }
  
    function editTestimonial() {
      handleTestimonialPress();
      setTestimonialEdit(true);
    }

    function EditButton() {
      return (
        <Card.Footer className="d-flex flex-row justify-content-center w-100">
          <Button color="secondary" onClick={editTestimonial}>
            Edit
          </Button>
        </Card.Footer>
      )
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
          { userCanEditTestimonials && <EditButton /> }
        </Card>
      </Tooltip>
    )
  }

  
function ClassOffering({offering, col}) {

  function handleOfferingPress() {
    setOfferingModalOpen(true);
    setCurrentOffering(offering);
  }

  function editOffering() {
    handleOfferingPress();
    setOfferingEdit(true);
  }

  function EditButton() {
    return (
      <Card.Footer className="d-flex flex-row justify-content-center w-100 my-2">
        <Button color="secondary" onClick={editOffering}>
          Edit
        </Button>
      </Card.Footer>
    )
  }

  return (
    <div className={`col-${col} p-3`} style={{height: "500px"}}>
      <Card isHoverable isPressable css={{height: "500px"}} className="d-flex flex-column justify-content-between" onClick={handleOfferingPress}>
        <Card.Image
          src={offering.image}
          objectFit='cover'
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
          <Button bordered size="md" style={{minHeight:"2rem"}} onClick={handleOfferingPress}>
            Read More
          </Button>
        </div>
        { userCanEditOfferings && <EditButton /> }
      </Card>
    </div>
  )
}
}
