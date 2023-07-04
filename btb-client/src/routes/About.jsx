// Library Imports
import { addDoc, collection, deleteDoc, doc, getDoc, setDoc, } from 'firebase/firestore';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { IconButton, TextField, } from '@mui/material';
import { Button, Card, Modal, Text, Textarea, } from "@nextui-org/react";
import { useEffect, useState, } from 'react'

// Style Imports
import "../assets/style/about.css";

// Image Imports
import homeworkSpace from "../assets/images/about-us-homework-space2.jpg"
import ourMethods from "../assets/images/they-feast.jpeg"
import wall from "../assets/images/about-our-center-wall3.jpg"

// Component Imports
import { serverURL, } from '../App';
import { PageHeader, } from '../components/Bar';
import { ScheduleBar, } from "../components/Forms";

// API Imports
import { auth, firestore, openFileBrowser, removeImage, uploadImgToStorageAndReturnDownloadLink, } from '../api/firebase';
import { compressImage } from '../api/images';


export default function About() {

  // Fetch current team members after component mount
  useEffect(() => {
    // Ask server for current staff
    fetch(`${serverURL}staff`).then(res => {
      res.json().then(data => {
        // Get json from HTTP response and set data state
        setStaffData(data);
      })
    });
  }, [])

  const [staffData, setStaffData] = useState([]);

  const [formModalOpen, setFormModalOpen] = useState(false);

  const [currentTeamMember, setCurrentTeamMember] = useState({
    order: 0,
    name: null,
    position: null,
    image: null,
    bio: null,
  })

  const [teamMemberModalOpen, setTeamMemberModalOpen] = useState(false);

  const [userCanEditStaff, setUserCanEditStaff] = useState(false);

  const [staffEdit, setStaffEdit] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        fetchUserPermissions();
      } else {
        setUserCanEditStaff(false);
      }
    })
  })

  function fetchUserPermissions() {
    const docRef = doc(firestore, "users", auth.currentUser.uid);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setUserCanEditStaff(data.staff);
      }
    })
  }

  useEffect(() => {
    if (auth.currentUser) {
      fetchUserPermissions();
    }
  })

  function handleStaffModalClose() {
    setTeamMemberModalOpen(false);
    setStaffEdit(false);
  }

  return (
    <div className="d-flex flex-column">
      <Modal 
        closeButton
        width="75vw"
        open={teamMemberModalOpen}
        blur
        onClose={handleStaffModalClose}
      >
        <Modal.Body>
          <StaffModal />
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex flex-row align-items-center justify-content-center w-100">
            <Button auto flat color="error" onPress={handleStaffModalClose} >
                Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <PageHeader 
        text="About Beyond the Bell"
        sections={[
          {
            title: "Developing All Learners",
            id: "developing-all-learners"
          },
          {
            title: "Meet The Team",
            id: "meet-the-team"
          },
          {
            title: "Our Methods",
            id: "our-methods"
          },
          {
            title: "Our Learning Center",
            id: "our-learning-center"
          },
        ]}
      />
      <section className="container-fluid p-lg-5 py-5 p-2" id="developing-all-learners">
        <div className="row">
          <div className="col-xxl-6 col-xl-12 about-text">
            <Text h1 color="primary">
              Developing All Learners
            </Text>
            <Text size="$lg">
              Beyond the Bell (BTB) supports the development of all learners, using current best practices in education. BTB students will improve their academic success, executive functioning, and social/emotional health.
            </Text>
            <Text size="$lg">
              We encourage relationship building as a bridge to lifelong success. Our highly trained professional educators will spend time truly getting to know you and your child. With our guidance, your child will make more efficient use of homework time. This will foster happiness, confidence and results at home and at school.
            </Text>
            <Text size="$lg">
              The bonds your child will make with our educators will lead to improved school performance and increased confidence, while your child becomes happier at school. Completing homework at BTB may even relieve the burden that homework struggles can put on your entire family.
            </Text>
          </div>
          <div className="col-xxl-6 col-xl-12" >
            <img src={homeworkSpace} className="img-shadow" alt="about-us-homework-space" style={{width: "100%", height: "100%", maxWidth: "80vw" ,objectFit: "cover"}} />
          </div>
        </div>
      </section>
      <div className="rainbow-line" />
      <section className="container-fluid p-lg-5 p-2 py-5" id="meet-the-team">
        <div className="row d-flex flex-row justify-content-center align-items-center">
          <div className="col-xxl-3 col-xl-6">
            <img src={`${serverURL}image/nancy-mager.jpg`} className="img-shadow img-round" alt="nancy-mager" />
          </div>
          <div className="col-xxl-6 col-xl-12 about-text">
              <Text h1 color="primary">
                Meet the Director - Nancy Mager
              </Text>
              <Text size="$lg">
                <strong>Nancy Mager</strong> has always loved kids, and her passion is understanding each child’s motivation, strengths and struggles. Nancy has a Bachelor's degree in psychology from Boston University and a Master’s degree in special education from Simmons College. She’s spent the last 25 years working in the field of special education, with a strong interest in autism spectrum disorders and mental health. Professionally, Nancy has worked as a classroom teacher, behavioral and educational consultant, student advocate, adjunct college instructor, and most recently as the Director of Education for a non-profit.
              </Text>
              <Text size="$lg">
                Nancy has been trained extensively in the practices and philosophy of Applied Behavior Analysis (ABA), Social Thinking©, the Picture Exchange Communication System© (PECS), multiple assistive technology programs, TEACCH Autism (University of North Carolina), STARS Autism (Naperville, IL), Moving Traditions; It’s a Girls Thing©, and crisis prevention.
              </Text>
          </div>
        </div>
        <Text h1 color="primary">
          And our Amazing Staff
        </Text>
        <div className="row d-flex flex-row justify-content-center align-items-center">
          { renderTeam() }
        </div>
        { userCanEditStaff && <AddStaffButton /> }
      </section>
      <section className="container-fluid bg-blue" id="our-methods">
        <div className="row">
          <div className="col-xl-6 col-lg-12 about-text">
            <Text h1 color="white">
              Our Methods
            </Text>
            <Text size="$lg" color="white">
              We encourage relationship building as a bridge to lifelong success. Our highly trained professional educators will spend time truly getting to know you and your child. With our guidance, your child will make more efficient use of homework time. This will foster happiness, confidence and results at home and at school.
            </Text>
            <Text size="$lg" color="white">
              The bonds your child will make with our educators will lead to improved school performance and increased confidence, while your child becomes happier at school. Completing homework at BTB may even relieve the burden that homework struggles can put on your entire family.
            </Text>
          </div>
          <div className="col-xl-6 d-none d-xl-flex" >
            <img src={ourMethods} className="img-shadow" alt="our-methods" style={{padding: "1rem", height: "100%", width: "50vw", objectFit: "cover"}}/>
          </div>
        </div>
      </section>
      <section className="container-fluid p-lg-5 p-2 py-5 section-header" id="our-learning-center">
        <div className="row">
          <div className="col-xl-6 col-lg-12" >
            <img src={wall} className="img-shadow" alt="about-us-homework-space" style={{width: "auto", height: "100%", objectFit: "cover"}} />
          </div>
          <div className="col-xl-6 col-lg-12 about-text">
            <Text h1 color="primary">
              Our Learning Center
            </Text>
            <Text size="$lg">
              Beyond The Bell offers a broad spectrum of services including school day support for remote learning plans, a menu of academic electives, individual tutoring in all subjects, plus afterschool small group homework help and project support. We also offer parent coaching, educational and behavioral consultation, student advocacy and professional development for educators.
            </Text>
            <Text size="$lg">
              BTB is located at 3 Man-Mar Drive, Unit 14, in Plainville, Massachusetts, just minutes from Route 1, I-95, and I-495. Our facility is located a short walk or drive from quality restaurants, the popular An Unlikely Story bookstore, and much more.
            </Text>
          </div>
        </div>
      </section>
      <ScheduleBar open={formModalOpen} setOpen={setFormModalOpen} />
    </div>
  )

    function StaffModal() {

      const [tempName, setTempName] = useState(currentTeamMember.name);
      const [tempPosition, setTempPosition] = useState(currentTeamMember.position);
      const [tempBio, setTempBio] = useState(currentTeamMember.bio);
      const [tempOrder, setTempOrder] = useState(currentTeamMember.order);
      const [tempImageURL, setTempImageURL] = useState(serverURL + currentTeamMember.image);
      const [uploadImageFile, setUploadImageFile] = useState(null);

      async function saveChanges() {
        let newErrorMessage = "Error: missing fields ( "; 
        let errorFound = false;
        if (!tempName) {
          newErrorMessage += "name "
          errorFound = true;
        }
        if (!tempPosition) {
          newErrorMessage += "position "
          errorFound = true;
        }
        if (!tempPosition) {
          newErrorMessage += "bio "
          errorFound = true;
        }
        if (!tempPosition) {
          newErrorMessage += "order "
          errorFound = true;
        }
        newErrorMessage += ")";
        if (errorFound) {
          setErrorMessage(newErrorMessage);
          return;
        }
        const newData = {...currentTeamMember};
        const uploadDate = Date.now().toString();
        const compressedImage = await compressImage(uploadImageFile);
        const imgLink = await uploadImgToStorageAndReturnDownloadLink("staff", compressedImage, uploadDate);
        if ((imgLink !== newData.image) && imgLink) {
          removeImage("staff/" + currentTeamMember.imgFileName);
        }
        newData.imgFileName = imgLink ? uploadDate : currentTeamMember.imgFileName;
        newData.order = tempOrder ? tempOrder : staffData.length + 1;
        if (imgLink) {
          newData.image = imgLink;
        }
        newData.name = tempName;
        newData.position = tempPosition;
        newData.bio = tempBio;
        if (currentTeamMember.id) {        
          const docRef = doc(firestore, "staff", currentTeamMember.id);
          setDoc(docRef, newData).then(() => {
            setStaffEdit(false);
            setTeamMemberModalOpen(false);
            window.location.reload();
          });
        } else {
          const collectionRef = collection(firestore, "staff");
          addDoc(collectionRef, newData).then(() => {
            setStaffEdit(false);
            setTeamMemberModalOpen(false);
            window.location.reload();
          });
        }
      }

      const [deleteWarningVisible, setDeleteWarningVisible] = useState(false);

      function deleteStaff() {
        const docRef = doc(firestore, "staff", currentTeamMember.id);
        const deleteRef = doc(firestore, "deletedStaff", currentTeamMember.id);
        deleteDoc(docRef);
        removeImage("staff/" + currentTeamMember.imgFileName);
        setDoc(deleteRef, currentTeamMember).then(() => {
          setStaffEdit(false);
          setTeamMemberModalOpen(false);
          window.location.reload();
        });
      }

      function handleStaffNameChange(e) {
        setTempName(e.target.value);
      }

      function handleStaffPositionChange(e) {
        setTempPosition(e.target.value);
      }

      function handleStaffBioChange(e) {
        setTempBio(e.target.value);
      }

      function handleStaffOrderChange(e) {
        setTempOrder(parseInt(e.target.value));
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
        <div className="container-fluid">
          <div className="row d-flex flex-row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-12 d-flex flex-column align-items-center gap-3">
              { tempImageURL ? 
                <img 
                  src={tempImageURL} 
                  alt={currentTeamMember.name ? currentTeamMember.name : "add-team-member"} 
                  className={`img-shadow ${staffEdit ? "edit" : ""}`}
                  style={{maxHeight: "50vw"}} 
                  onClick={() => {
                    if (staffEdit) {
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
              { staffEdit && !deleteWarningVisible &&  currentTeamMember.id &&
                <Button flat auto color="error" onClick={() => setDeleteWarningVisible(true)}>
                  Delete Team Member
                </Button>
              }
              { staffEdit && deleteWarningVisible && currentTeamMember.id &&
                <Text>
                  Are you sure you want to delete this team member?
                </Text>
              }
              { staffEdit && deleteWarningVisible && currentTeamMember.id &&
                <div className="w-100 d-flex flex-row justify-content-around align-items-center">
                  <Button flat auto color="success" onClick={() => setDeleteWarningVisible(false)}>
                    Cancel
                  </Button>
                  <Button flat auto color="error" onClick={deleteStaff}>
                    Delete them!
                  </Button>
                </div>
              }
            </div>
            <div className="col-lg-8 p-3 col-md-12 d-flex flex-column justify-content-center gap-2">
              <div className="w-100 d-flex flex-row gap-2 justify-content-center">
                { !staffEdit && 
                  <Text size="$lg" css={{fontWeight: "bold"}} >
                    {tempName}
                  </Text>
                }
                { staffEdit && 
                  <TextField label="Name" placeholder="Enter their name" value={tempName} onChange={handleStaffNameChange}/>
                }
                <Text>
                  —
                </Text>
                { !staffEdit && 
                  <Text>
                    {tempPosition}
                  </Text>
                }
                { staffEdit && 
                  <TextField label="Position" placeholder="Enter their positon" value={tempPosition} onChange={handleStaffPositionChange}/>
                }
                { staffEdit && 
                  <TextField label="Order" placeholder="Enter their order value" value={tempOrder} onChange={handleStaffOrderChange}/>
                }
              </div>
                { !staffEdit && 
                  <Text align="center">
                    {tempBio}
                  </Text>
                }
              { staffEdit && 
                <Textarea label="Team Member Bio" placeholder="Please enter a bio for this team member" bordered value={tempBio} onChange={handleStaffBioChange}/>
              }
              { staffEdit &&
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
      )
    }

  function renderTeam() {

    const sortedTeamMembers = staffData.sort((a, b) => a.order - b.order);
  
    return sortedTeamMembers.map((teamMember, index) => {
  
      function handleCardClick() {
        setCurrentTeamMember(teamMember);
        setTeamMemberModalOpen(true);
      }

      function editStaff() {
        handleCardClick();
        setStaffEdit(true);
      }

      function EditButton() {
        return (
          <Card.Footer className="d-flex flex-row justify-content-center w-100 my-2">
            <Button color="secondary" onClick={editStaff}>
              Edit
            </Button>
          </Card.Footer>
        )
      }

  
      return (
        <div className="col-xxl-3 col-xl-4 col-md-6 col-sm-12 p-3 d-flex flex-column align-items-center justify-content-center" key={index} style={{maxHeight: 550}}>
          <Card 
            isHoverable 
            isPressable 
            className="p-3 m-2 d-flex flex-column align-items-center h-100"
            onPress={handleCardClick}
          >
            <Card.Body className="d-flex flex-column gap-2 align-items-center w-100 justify-content-center">
              <img src={serverURL + teamMember.image} alt={teamMember.name} className="img-shadow img-round" style={{height: "10rem", width: "10rem", objectFit: "cover"}}/>
              <div className="w-100 d-md-none d-lg-flex flex-column justify-content-center text-center align-items-center">
                <Text size="$lg" css={{fontWeight: "bold"}} >
                  {teamMember.name}
                </Text>
                <Text>
                  {teamMember.position}
                </Text>
              </div>
              <Button bordered onClick={handleCardClick}>
                Read More
              </Button>
            </Card.Body>
            { userCanEditStaff && <EditButton />}
          </Card>
        </div>
      )
    })
  }

  function AddStaffButton() {
  
    function handleCardClick() {
      setCurrentTeamMember({
        id: null,
        order: null,
        name: null,
        position: null,
        image: null,
        bio: null,
      });
      setTeamMemberModalOpen(true);
    }

    function editStaff() {
      handleCardClick();
      setStaffEdit(true);
    }



    return (
      <div className="d-flex flex-row w-100 justify-content-center p-3">
        <Button size="lg" color="secondary" css={{width: "100%"}} onClick={editStaff}>
          Add a Team Member
        </Button>
      </div>
    )
  }
}
