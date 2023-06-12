import React, { useContext, useState } from 'react'

import { Button, Card, Modal, Text, } from "@nextui-org/react";

import "../assets/style/about.css"
import { PageHeader, OrangeBar } from '../components/Bar';
import homeworkSpace from "../assets/images/about-us-homework-space2.jpg"
import nancyMager from "../assets/images/nancy-mager.jpg"
import ourMethods from "../assets/images/they-feast.jpeg"
import wall from "../assets/images/about-our-center-wall3.jpg"

import { FormModal } from "../components/Forms";
import { staffContext } from '../api/context';

export default function About() {

  const { staffData } = useContext(staffContext);

  const [modalOpen, setModalOpen] = useState(false);

  const [currentTeamMember, setCurrentTeamMember] = useState({
    order: -1,
    name: null,
    position: null,
    image: null,
    bio: null,
  })

  const [teamMemberModalOpen, setTeamMemberModalOpen] = useState(false);

  return (
    <div className="d-flex flex-column">
      <Modal 
        closeButton
        width="75vw"
        open={teamMemberModalOpen}
        blur
        onClose={() => setTeamMemberModalOpen(false)}
      >
        <Modal.Body>
          <div className="container-fluid">
            <div className="row d-flex flex-row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-12">
                <img src={currentTeamMember.image} alt={currentTeamMember.name} className="img-shadow"/>
              </div>
              <div className="col-lg-8 p-3 col-md-12 d-flex flex-column justify-content-center">
                <div className="w-100 d-flex flex-row gap-2 justify-content-center">
                  <Text size="$lg" css={{fontWeight: "bold"}} >
                    {currentTeamMember.name}
                  </Text>
                  <Text>
                    —
                  </Text>
                  <Text>
                    {currentTeamMember.position}
                  </Text>
                </div>
                <Text align="center">
                  {currentTeamMember.bio}
                </Text>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex flex-row align-items-center justify-content-center w-100">
            <Button auto flat color="error" onPress={() => setTeamMemberModalOpen(false)} >
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
      <section className="container-fluid p-5" id="developing-all-learners">
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
      <section className="container-fluid p-5" id="meet-the-team">
        <div className="row d-flex flex-row justify-content-center align-items-center">
          <div className="col-xxl-3 col-xl-6">
            <img src={nancyMager} className="img-shadow img-round" alt="nancy-mager" />
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
            <img src={ourMethods} className="img-shadow" alt="our-methods" style={{padding: "1rem", height: "100%", width: "50vw", objectFit: "fill"}}/>
          </div>
        </div>
      </section>
      <section className="container-fluid p-5 section-header" id="our-learning-center">
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
      <section>
        <OrangeBar>
          <Text h1 color="white">
            Ready to support your child’s learning?
          </Text>
          <Button size="xl" bordered color="gradient" shadow onClick={() => setModalOpen(true)}>
            Schedule A Session
          </Button>
        </OrangeBar>
      </section>
      <FormModal open={modalOpen} setOpen={setModalOpen}/>
    </div>
  )

  function renderTeam() {

    if (!staffData) {
      console.log("Please")
      return;
    }

    const sortedTeamMembers = staffData.sort((a, b) => a.order - b.order);
  
    return sortedTeamMembers.map((teamMember, index) => {
  
      function handleCardClick() {
        setCurrentTeamMember(teamMember);
        setTeamMemberModalOpen(true);
      }
  
      return (
        <div className="col-xxl-3 col-xl-4 col-md-6 col-sm-12" key={index}>
          <Card 
            isHoverable 
            isPressable 
            className="p-3 m-2 d-flex flex-column align-items-center"
            onPress={handleCardClick}
          >
            <Card.Body className="d-flex flex-column gap-2 align-items-center w-100 justify-content-center">
              <img src={teamMember.image} alt={teamMember.name} className="img-shadow img-round" style={{width: "10rem", height: "10rem"}}/>
              <div className="w-100 d-md-none d-lg-flex flex-row gap-2 justify-content-center text-center align-items-center">
                <Text size="$lg" css={{fontWeight: "bold"}} >
                  {teamMember.name}
                </Text>
                <Text>
                  —
                </Text>
                <Text>
                  {teamMember.position}
                </Text>
              </div>
              <div className="w-100 d-md-flex d-lg-none flex-column align-items-center">
                <Text size="$lg" css={{fontWeight: "bold"}} >
                  {teamMember.name}
                </Text>
                <Text>
                  {teamMember.position}
                </Text>
              </div>
            </Card.Body>
              <Button bordered onClick={handleCardClick}>
                Read More
              </Button>
          </Card>
        </div>
      )
    })
  }
}

