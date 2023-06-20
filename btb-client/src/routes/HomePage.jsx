import React, { useEffect, useState } from 'react'

import { Button, Text, Card, Modal, Tooltip, Textarea, Input } from "@nextui-org/react";

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import Carousel from "react-material-ui-carousel";

import "../assets/style/homepage.css"
import { FormModal } from '../components/Forms';

import { auth, firestore, openFileBrowser, removeImage, storage, uploadImgToStorageAndReturnDownloadLink } from '../api/firebase';
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { IconButton, TextField } from '@mui/material';
import { PencilIcon } from '../components/Icons';
import { deleteObject, ref, } from 'firebase/storage';
import { serverURL } from '../App';

export default function HomePage() {

  const [formModalOpen, setFormModalOpen] = useState(false);
  const [testimonialModalOpen, setTestimonialModalOpen] = useState(false);
  const [offeringModalOpen, setOfferingModalOpen] = useState(false);

  const [testimonialEdit, setTestimonialEdit] = useState(false);
  const [offeringEdit, setOfferingEdit] = useState(false);

  const [userCanEditTestimonials, setUserCanEditTestimonials] = useState(false)
  const [userCanEditOfferings, setUserCanEditOfferings] = useState(false)

  const [testimonialData, setTestimonialData] = useState([]);
  const [offeringData, setOfferingData] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        fetchUserPermissions();
      } else {
        setUserCanEditTestimonials(false);
        setUserCanEditOfferings(false);
      }
    })
  }, [])

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
  }, [])

  useEffect(() => {
    fetchOfferings();
    fetchTestimonails();
  }, [])

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
    order: 0,
  });

  

  function fetchOfferings() {
    const collectionRef = collection(firestore, "offerings");
    // Add listener
    onSnapshot((collectionRef), (snap) => {
      let newOfferings = [];
      for (const doc of snap.docs) {
        const offeringWithId = doc.data();
        offeringWithId["id"] = doc.id;
        newOfferings.push(offeringWithId);
      }
      setOfferingData(newOfferings);
    })
  }

  function fetchTestimonails() {
    const collectionRef = collection(firestore, "testimonials");
    // Add listener
    onSnapshot((collectionRef), (snap) => {
      let newTestimonials = [];
      for (const doc of snap.docs) {
        const testimonialWithId = doc.data();
        testimonialWithId["id"] = doc.id;
        newTestimonials.push(testimonialWithId);
      }
      setTestimonialData(newTestimonials);
    })
  }

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
      <section className="home-image d-flex flex-column w-100 align-items-center justify-content-center py-5 px-2">
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
            fontSize: "5rem",
            filter: "drop-shadow(2px 2px 5px black)",
            textGradient: "45deg, $yellow600 -20%, $btbOrange600 100%",
          }}
          className="d-none d-md-inline"
        >
          Beyond The Bell <br /> <span className='d-none d-xxl-inline'>Educational Services</span>
        </Text>
        <Text 
          h1
          css={{
            fontSize: "3rem",
            filter: "drop-shadow(2px 2px 5px black)",
            textGradient: "45deg, $yellow600 -20%, $btbOrange600 100%",
          }}
          className="d-inline d-md-none"
        >
          Beyond The Bell
        </Text>
        <Text 
          h2
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
            className="d-none d-md-inline"
            onClick={() => setFormModalOpen(true)}
          >
            Schedule
          </Button>
          <Button
            bordered
            rounded
            color="gradient"
            className="d-md-none d-inline"
            onClick={() => setFormModalOpen(true)}
          >
            Schedule
          </Button>
        </div>
      </section>
      <div className="rainbow-line" />
      <section className="container-fluid d-flex flex-column align-items-center py-5">  
        <Text h1 color="primary" className="d-none d-md-inline">
          What's Happening Now At BTB
        </Text>
        <Text h3 color="primary" className="d-inline d-md-none">
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
        { userCanEditOfferings && <AddOfferingButton /> }
      </section>
      <section className="bg-blue px-1 py-5">
          <Text h1 color="white" className="d-none d-md-inline">
            What Parents Are Saying
          </Text>
          <Text h3 color="white" className="d-inline d-md-none">
            What Parents Are Saying
          </Text>
          <div className="container-fluid my-5" >
            <div className="d-xxl-flex d-none w-100 align-items-center flex-row justify-content-center">
              <BTBCarousel>
                { renderTestimonials(3) }  
              </BTBCarousel>
            </div>
            <div className="d-md-flex d-xxl-none d-none w-100 align-items-center flex-row justify-content-center">
              <BTBCarousel>
                { renderTestimonials(2) }  
              </BTBCarousel>
            </div>
            <div className="d-md-none d-flex w-100 align-items-center flex-row justify-content-center">
              <BTBCarousel>
                { renderTestimonials(1) }
              </BTBCarousel>
            </div>
          </div>
        { userCanEditOfferings && <AddTestimonialButton /> }
      </section>
    </div>
  )

  function BTBCarousel(props) {
    return (
      <Carousel swipe={false}  animation="slide" navButtonsAlwaysVisible className="w-100 px-3" autoPlay={false}>
        {props.children}
      </Carousel>
    )
  }

  function TestimonialModal() {
    
    const [tempMessage, setTempMessage] = useState(currentTestimonial.message);
    const [tempPreview, setTempPreview] = useState(currentTestimonial.preview);
    const [tempAuthorDesc, setTempAuthorDesc] = useState(currentTestimonial.authorDescription);
    const [tempImageURL, setTempImageURL] = useState(serverURL + currentTestimonial.image);
    const [tempOrder, setTempOrder] = useState(currentTestimonial.order);
    const [uploadImageFile, setUploadImageFile] = useState(null);

    const [errorMessage, setErrorMessage] = useState(null);

    function handleTestimonialMessageChange(e) {
      setTempMessage(e.target.value);
    }

    function handleTestimonialAuthorDescChange(e) {
      setTempAuthorDesc(e.target.value);
    }

    function handleTestimonialPreviewChange(e) {
      setTempPreview(e.target.value);
    }

    function handleTestimonialOrderChange(e) {
      setTempOrder(parseInt(e.target.value));
    }

    async function saveChanges() {
      let newErrorMessage = "Error: Missing Fields ( "; 
      let errorFound = false;
      if (!tempMessage) {
        newErrorMessage += "message "
        errorFound = true;
      }
      if (!tempPreview) {
        newErrorMessage += "preview "
        errorFound = true;
      }
      if (!tempAuthorDesc) {
        newErrorMessage += "authorDescription "
        errorFound = true;
      }
      if (!tempImageURL) {
        newErrorMessage += "image "
        errorFound = true;
      }
      newErrorMessage += ")";
      if (errorFound) {
        setErrorMessage(newErrorMessage);
        return;
      }
      const newData = {...currentTestimonial};
      const uploadDate = Date.now().toString();
      const imgLink = await uploadImgToStorageAndReturnDownloadLink("testimonials", uploadImageFile, uploadDate);
      console.log(imgLink);
      if (imgLink !== newData.image && imgLink) {
        removeImage("testimonials/" + currentTestimonial.imgFileName);
      }
      newData.imgFileName = imgLink ? uploadDate : currentTestimonial.imgFileName;
      newData.order = tempOrder ? tempOrder : testimonialData.length + 1;
      if (imgLink) {
        newData.image = imgLink;
      }
      newData.authorDescription = tempAuthorDesc;
      newData.message = tempMessage;
      newData.preview = tempPreview;
      if (currentTestimonial.id) {        
        const docRef = doc(firestore, "testimonials", currentTestimonial.id);
        setDoc(docRef, newData);
      } else {
        const collectionRef = collection(firestore, "testimonials");
        addDoc(collectionRef, newData)
      }
      setTestimonialEdit(false);
      setTestimonialModalOpen(false);
    }

    const [deleteWarningVisible, setDeleteWarningVisible] = useState(false);

    function deleteTestimonial() {
      const docRef = doc(firestore, "testimonials", currentTestimonial.id);
      const deleteRef = doc(firestore, "deletedTestimonials", currentTestimonial.id);
      removeImage("testimonials/" + currentTestimonial.imgFileName);
      deleteDoc(docRef);
      setDoc(deleteRef, currentTestimonial);
      setTestimonialEdit(false);
      setTestimonialModalOpen(false);
    }
    
    function uploadImage() {
      openFileBrowser().then((img) => {
        if (img) {
          const fileReader = new FileReader();
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
              setTempImageURL(result);
              setUploadImageFile(img);
            }
          }
          fileReader.readAsDataURL(img);
        }
      });
    }

    return (
      <Modal.Body>
      <div className="container-fluid">
        <div className="row d-flex flex-row align-items-center justify-content-center">
          <div className="col-lg-4 col-sm-12 gap-3 d-flex flex-column align-items-center">
          { tempImageURL ? 
            <img 
              src={tempImageURL} 
              alt={currentTestimonial.authorDescription ? currentTestimonial.authorDescription : "add-testimonial"} 
              className={`img-shadow ${testimonialEdit ? "edit" : ""}`}
              style={{maxHeight: "50vw"}} 
              onClick={() => {
                if (testimonialEdit) {
                  uploadImage()
                }
            }}/>
            :
            <Card isPressable isHoverable onClick={uploadImage}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Text>
                  Upload an image
                </Text>
                <IconButton>
                  <AddAPhotoIcon />
                </IconButton>
              </Card.Body>
            </Card>
          }
            { testimonialEdit && !deleteWarningVisible && currentTestimonial.id &&
              <Button flat auto color="error" onClick={() => setDeleteWarningVisible(true)}>
                Delete Testimonial
              </Button>
            }
            { testimonialEdit && deleteWarningVisible && currentTestimonial.id &&
              <Text>
                Are you sure you want to delete this testimonial?
              </Text>
            }
            { testimonialEdit && deleteWarningVisible && currentTestimonial.id &&
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
          <div className="col-lg-8 p-3 gap-3 col-sm-12 d-flex flex-column justify-content-center text-center">
            { !testimonialEdit && 
              <Text className="d-inline d-lg-none">
              "{tempMessage}"
              </Text>
            }
            { !testimonialEdit && 
              <Text className="d-none d-lg-inline" size="$lg">
                "{tempMessage}"
              </Text>
            }
            { testimonialEdit &&
              <Textarea label="Testimonial Message" placeholder="Enter the full testimonial message" bordered value={tempMessage ? tempMessage : ""} onChange={handleTestimonialMessageChange}/>
            }
            { testimonialEdit &&
              <Textarea label="Testimonial Preview" placeholder="This is the shortened preview that shows up on the homepage" bordered value={tempPreview ? tempPreview : ""} onChange={handleTestimonialPreviewChange}/>
            }
            { !testimonialEdit && 
              <Text className="d-inline d-lg-none">
                {currentTestimonial.authorDescription}
              </Text>
            }
            { !testimonialEdit && 
              <Text className="d-none d-lg-inline" size="$lg">
                {currentTestimonial.authorDescription}
              </Text>
            }
            { testimonialEdit &&
              <div className="container-fluid">
                <div className="row">
                  <TextField className="p-1 col-xl-6 col-sm-12" label="Author Description" placeholder="Enter a description of the testimonial's author" bordered value={tempAuthorDesc ? tempAuthorDesc : ""} onChange={handleTestimonialAuthorDescChange}/>
                  <TextField className="p-1 col-xl-6 col-sm-12" label="Order" placeholder="Enter this testimonial's order value" bordered value={tempOrder ? tempOrder : ""} onChange={handleTestimonialOrderChange}/>
                </div>
              </div>
            }
            { testimonialEdit &&
              <Button flat auto color="success" onClick={saveChanges}>
                Save Changes
              </Button>
            }
            { errorMessage && 
              <Text color="error">
                {errorMessage}
              </Text>
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
    const [tempOrder, setTempOrder] = useState(currentOffering.order);
    const [tempSchedule, setTempSchedule] = useState(currentOffering.schedule);
    const [tempImageURL, setTempImageURL] = useState(serverURL + currentOffering.image);
    const [uploadImageFile, setUploadImageFile] = useState(null);

    function handleOfferingDescriptionChange(e) {
      setTempDescription(e.target.value);
    }

    function handleOfferingScheduleChange(e) {
      setTempSchedule(e.target.value);
    }

    function handleOfferingTitleChange(e) {
      setTempTitle(e.target.value);
    }

    function handleOfferingOrderChange(e) {
      setTempOrder(parseInt(e.target.value));
    }

    async function saveChanges() {
      let newErrorMessage = "Error: Missing Fields ( "; 
      let errorFound = false;
      if (!tempDescription) {
        newErrorMessage += "desctiption "
        errorFound = true;
      }
      if (!tempTitle) {
        newErrorMessage += "title "
        errorFound = true;
      }
      if (!tempSchedule) {
        newErrorMessage += "schedule "
        errorFound = true;
      }
      if (!tempSchedule) {
        newErrorMessage += "schedule "
        errorFound = true;
      }
      newErrorMessage += ")";
      if (errorFound) {
        setErrorMessage(newErrorMessage);
        return;
      }
      const newData = {...currentOffering};
      const uploadDate = Date.now().toString();
      const imgLink = await uploadImgToStorageAndReturnDownloadLink("offerings", uploadImageFile, uploadDate);
      if (imgLink !== newData.image && imgLink) {
        removeImage("offerings/" + currentOffering.imgFileName);
      }
      newData.imgFileName = imgLink ? uploadDate : currentOffering.imgFileName;
      newData.order = tempOrder ? tempOrder : offeringData.length + 1;
      if (imgLink) {
        newData.image = imgLink;
      }
      newData.imgFileName = uploadDate;
      newData.description = tempDescription;
      newData.schedule = tempSchedule;
      newData.title = tempTitle;
      if (currentOffering.id) {        
        const docRef = doc(firestore, "offerings", currentOffering.id);
        setDoc(docRef, newData);
      } else {
        const collectionRef = collection(firestore, "offerings");
        addDoc(collectionRef, newData)
      }
      setOfferingEdit(false);
      setOfferingModalOpen(false);
    }

    const [deleteWarningVisible, setDeleteWarningVisible] = useState(false);

    function deleteOffering() {
      const docRef = doc(firestore, "offerings", currentOffering.id);
      const deleteRef = doc(firestore, "deletedOfferings", currentOffering.id);
      deleteDoc(docRef);
      removeImage("offerings/" + currentOffering.imgFileName);
      setDoc(deleteRef, currentOffering);
      setOfferingEdit(false);
      setOfferingModalOpen(false);
    }

    
    function uploadImage() {
      openFileBrowser().then((img) => {
        if (img) {
          const fileReader = new FileReader();
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
              setTempImageURL(result);
              setUploadImageFile(img);
            }
          }
          fileReader.readAsDataURL(img);
        }
      });
    }

    const [errorMessage, setErrorMessage] = useState(null);

    return (
      <Modal.Body>
      <div className="container-fluid">
        <div className="row d-flex flex-row align-items-center justify-content-center">
          <div className="col-lg-4 col-sm-12 gap-3 d-flex flex-column align-items-center">
          { tempImageURL ? 
            <img 
              src={tempImageURL} 
              alt={currentOffering.title ? currentOffering.title : "add-offering"} 
              className={`img-shadow ${offeringEdit ? "edit" : ""}`}
              style={{maxHeight: "50vw"}} 
              onClick={() => {
                if (offeringEdit) {
                  uploadImage()
                }
              }}/>
            :
            <Card isPressable isHoverable onClick={uploadImage}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Text>
                  Upload an image
                </Text>
                <IconButton>
                  <AddAPhotoIcon />
                </IconButton>
              </Card.Body>
            </Card>
          }
            { offeringEdit && !deleteWarningVisible && currentOffering.id &&
              <Button flat auto color="error" onClick={() => setDeleteWarningVisible(true)}>
                Delete Class Offering
              </Button>
            }
            { offeringEdit && deleteWarningVisible && currentOffering.id &&
              <Text>
                Are you sure you want to delete this class offering?
              </Text>
            }
            { offeringEdit && deleteWarningVisible && currentOffering.id &&
              <div className="w-100 d-flex flex-row justify-content-around align-items-center">
                <Button flat auto color="success" onClick={() => setDeleteWarningVisible(false)}>
                  Cancel
                </Button>
                <Button flat auto color="error" onClick={deleteOffering}>
                  Delete it!
                </Button>
              </div>
            }
          </div>
          <div className="col-lg-8 p-3 gap-3 col-sm-12 d-flex flex-column justify-content-center text-center">
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
              <div className="d-flex flex-row justify-content-center gap-2">
                <TextField label="Offering Title" placeholder="Please enter a title for this class offering" bordered value={tempTitle ? tempTitle : ""} onChange={handleOfferingTitleChange}/>
                <TextField label="Order" placeholder="Enter offering order value" value={tempOrder} onChange={handleOfferingOrderChange}/>
              </div>
            }
            { offeringEdit &&
              <Textarea label="Offering Description" placeholder="Enter the class offering's description" bordered value={tempDescription ? tempDescription : ""} onChange={handleOfferingDescriptionChange}/>
            }
            { !offeringEdit && 
              <Text>
                <strong>Schedule:</strong> {currentOffering.schedule}
              </Text>
            }
            { offeringEdit &&
              <Textarea label="Offering Schedule" placeholder="Enter this class offering's schedule" bordered value={tempSchedule ? tempSchedule : ""} onChange={handleOfferingScheduleChange}/>
            }
            { offeringEdit &&
              <Button flat auto color="success" onClick={saveChanges}>
                Save Changes
              </Button>
            }
            { errorMessage && 
              <Text color="error">
                {errorMessage}
              </Text>
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
          onPress={userCanEditOfferings ? editOffering : handleOfferingPress}
        >
          <Card.Body className="w-100 p-2 d-flex flex-row align-items-center justify-content-between" style={{overflowY: "hidden"}}>
            <img src={serverURL + o.image} alt={o.title} style={{width: "40%", minHeight: "100%", objectFit:"cover"}} className="img-shadow"/>
            <div className="d-flex w-100 flex-column px-2 text-center justify-content-center">
              <Text b size="$sm">
                {o.title}
              </Text>
              <Text size="$sm">
                {o.schedule}
              </Text>
              <div className="d-flex flex-row w-100 justify-content-center align-items-center">
                <Button bordered size="sm" style={{minHeight:"2rem", maxWidth: "50%"}}>
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
    
    const offeringPages = splitArray(offeringData.sort((a, b) => a.order - b.order), itemsPerCarousel);
    
    function renderPage(op) {

      return op.map((o, index) => {
        return <ClassOffering offering={o} key={`o-${index}`}/>
      })
    }

    return offeringPages.map((op, index) => {
      return (
        <div className="w-100 d-flex flex-row justify-content-center gap-2 px-5" style={{minHeight: "600px"}} key={`op-${index}`}>
          { renderPage(op) }
        </div>
      )
    })
  }

  function renderTestimonials(itemsPerCarousel, noMargin) {

    const testimonialPages = splitArray(testimonialData.sort((a, b) => a.order - b.order), itemsPerCarousel);
    
    function renderPage(tp) {

      return tp.map((t, index) => {
        return <Testimonial testimonial={t} key={`o-${index}`}/>
      })
    }

    return testimonialPages.map((tp, index) => {
      return (
        <div className="w-100 d-flex flex-row justify-content-center gap-2 line-underneath px-1" key={`tp-${index}`}>
            { renderPage(tp) }
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
      <div 
        className={`p-3`}
        style={{flex: 1, minHeight: "600px"}}
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
              <div className="text-center d-flex flex-column align-items-center justify-content-center h-100 w-100">
                <img src={serverURL + props.testimonial.image} alt="testimonial-img" className="d-md-none d-xs-inline testimonial-img" style={{objectFit: "cover"}}/>
                <img src={serverURL + props.testimonial.image} alt="testimonial-img" className="d-none d-md-inline testimonial-img" style={{width: "10rem", height: "10rem", objectFit: "cover"}}/>
                <Text className="d-inline d-lg-none">
                  "{props.testimonial.preview}"
                </Text>
                <Text className="d-none d-lg-inline" size="$lg">
                  "{props.testimonial.preview}"
                </Text>
                <Text className="d-inline d-lg-none">
                  "{props.testimonial.authorDescription}"
                </Text>
                <Text className="d-none d-lg-inline" size="$lg">
                  "{props.testimonial.authorDescription}"
                </Text>
              </div>
          </Card.Body>
          { userCanEditTestimonials && <EditButton /> }
        </Card>
      </div>
    )
  }
  

  function AddOfferingButton() {
  
    function handleButtonClick() {
      setCurrentOffering({
        description: null,
        title: null,
        image: null,
        schedule: null,
        order: null,
        imgFileName: null,
      });
      setOfferingModalOpen(true);
    }

    function editOfferings() {
      handleButtonClick();
      setOfferingEdit(true);
    }


    return (
      <div className="d-flex flex-row w-100 p-2 justify-content-center">
        <Button css={{width: "100%"}} size="lg" color="secondary" onClick={editOfferings}>
          Add a Class Offering
        </Button>
      </div>
    )
  }

  
  function AddTestimonialButton() {
  
    function handleButtonClick() {
      setCurrentTestimonial({
        authorDescription: null,
        message: null,
        preview: null,
        order: null,
        imgFileName: null,
      });
      setTestimonialModalOpen(true);
    }

    function editTestimonials() {
      handleButtonClick();
      setTestimonialEdit(true);
    }


    return (
      <div className="d-flex flex-row w-100 p-2 justify-content-center">
        <Button css={{width: "100%"}}  size="lg" color="secondary" onClick={editTestimonials}>
          Add a Testimonial
        </Button>
      </div>
    )
  }
  
function ClassOffering({offering}) {

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
    <div className={`p-3`} style={{height: "500px", flex: 1}}>
      <Card isHoverable isPressable css={{height: "500px"}} className="d-flex flex-column justify-content-between" onClick={handleOfferingPress}>
        <Card.Image
          src={serverURL + offering.image}
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
