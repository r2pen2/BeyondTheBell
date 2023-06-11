import React, { useState } from 'react'

import { Button, Card, Spacer, Text, } from "@nextui-org/react";

import "../assets/style/about.css"
import { PageHeader, OrangeBar } from '../components/Bar';
import homeworkSpace from "../assets/images/about-us-homework-space2.jpg"
import nancyMager from "../assets/images/nancy-mager.jpg"
import ourMethods from "../assets/images/they-feast.jpeg"
import wall from "../assets/images/about-our-center-wall3.jpg"

import davidKim from "../assets/images/staff/davidKim.jpg"
import jasonBrown from "../assets/images/staff/jasonBrown.jpg"
import jessicaReynolds from "../assets/images/staff/jessicaReynolds.jpg"
import lisaMartinez from "../assets/images/staff/lisaMartinez.jpg"
import matthewBroderick from "../assets/images/staff/matthewBroderick.jpg"
import rachelGarcia from "../assets/images/staff/rachelGarcia.jpg"

import { FormModal } from "../components/Forms";
import { btbOrange } from '../assets/style/colors';

export default function About() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="d-flex flex-column">
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
}

const teamMembers = [
  {
    order: 1,
    name: "Jessica Reynolds",
    position: "English Tutor",
    image: jessicaReynolds,
    bio: "Jessica is an English tutor with a Master's in English Literature. She is passionate about teaching and has been working with students for 7 years. Her focus is on improving students' writing skills and helping them appreciate literature. Jessica believes that good communication skills are essential for success in any field. Outside of the tutoring center, she is an avid reader and loves to write short stories."
  },
  {
    order: 2,
    name: "David Kim",
    position: "Science Tutor",
    image: davidKim,
    bio: "David is a Science Tutor, specializing in Physics and Chemistry. He has a Master's degree in Chemical Engineering. His scientific background allows him to make science engaging and relatable to students. David has a talent for breaking down complicated concepts into easy-to-understand language. When he’s not teaching, David enjoys tinkering with electronics and playing the guitar."
  },
  {
    order: 6,
    name: "Lisa Martinez",
    position: "Administrative Assistant",
    image: lisaMartinez,
    bio: "Lisa is the Administrative Assistant and a crucial part of the team. She has been with the center for 3 years, ensuring that operations run efficiently. Her organizational skills and attention to detail keep the center in top shape. Lisa is usually the first point of contact for parents and students, and she’s known for her warm and friendly demeanor. In her leisure time, she enjoys painting and taking nature walks."
  },
  {
    order: 5,
    name: "Matthew Broderick",
    position: "Math Tutor",
    image: matthewBroderick,
    bio: "Matthew Broderick, renowned for his illustrious career in acting, has joined Beyond The Bell as a Math Tutor. Surprising to many, Matthew has a deep-seated love for mathematics and decided to make a career change to pursue this passion. With his charisma and ability to perform, he makes learning math an incredibly engaging experience for students. He believes in making a difference in the lives of the youth and takes immense joy in witnessing their progress. When not tutoring, he sometimes reminisces about his acting days and shares exciting stories with students and staff."
  },
  {
    order: 4,
    name: "Jason Brown",
    position: "SAT/ACT Prep Tutor",
    image: jasonBrown,
    bio: "Jason is specialized in SAT and ACT prep, and has been a tutor for over 6 years. He has a degree in Psychology, which he utilizes to understand students' learning patterns and adapt his teaching methods. Jason is passionate about equipping students with the strategies and confidence needed to excel in standardized tests. He is also a basketball enthusiast and coaches a local youth team in his spare time."
  },
  {
    order: 3,
    name: "Rachel Garcia",
    position: "Academic Advisor",
    image: rachelGarcia,
    bio: "Rachel serves as an Academic Advisor at the center. With a background in Counseling, she plays a vital role in helping students plan their educational path. She believes that proper guidance is essential for students to make informed decisions regarding their academic and career goals. Rachel is also an advocate for mental health and conducts workshops for stress management."
  }
]

function renderTeam() {

  const sortedTeamMembers = teamMembers.sort((a, b) => a.order - b.order);

  return sortedTeamMembers.map((teamMember, index) => {
    return (
      <Card 
        isHoverable 
        isPressable 
        className="m-2 p-3 d-flex flex-column align-items-center col-xxl-3 col-xl-4 col-md-6 col-sm-12"
      >
        <Card.Body className="d-flex flex-row gap-4 align-items-center w-100 justify-content-center">
          <img src={teamMember.image} alt={teamMember.name} className="img-shadow img-round" style={{width: "10rem", height: "10rem"}}/>
          <div className="w-100 d-flex flex-column align-items-center">
            <Text size="$lg" b >
              {teamMember.name}
            </Text>
            <Text>
              {teamMember.position}
            </Text>
          </div>
        </Card.Body>
        <Card.Footer className="w-100 d-flex flex-row justify-content-center">
          <Button bordered>
            Read More
          </Button>
        </Card.Footer>
      </Card>
    )
  })
}