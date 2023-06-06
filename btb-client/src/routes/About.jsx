import React, { useState } from 'react'

import { Button, Card, Text, } from "@nextui-org/react";

import "../assets/style/about.css"
import { PageHeader, OrangeBar } from '../components/Bar';
import homeworkSpace from "../assets/images/about-us-homework-space2.jpg"
import nancyMager from "../assets/images/nancy-mager.jpg"
import ourMethods from "../assets/images/our-methods.jpeg"
import wall from "../assets/images/about-our-center-wall3.jpg"


import { FormModal } from "../components/Forms";

export default function About() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="d-flex flex-column">
      <PageHeader text="About Beyond the Bell" />
      <section className="container-fluid p-5">
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
            <img src={homeworkSpace} alt="about-us-homework-space" style={{width: "100%", height: "100%", maxWidth: "80vw" ,objectFit: "cover"}} />
          </div>
        </div>
      </section>
      <div className="rainbow-line" />
      <section className="container-fluid p-5">
        <div className="row d-flex flex-row justify-content-center align-items-center">
          <div className="col-xxl-3 col-xl-6">
            <img src={nancyMager} alt="nancy-mager" />
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
      </section>
      <section className="container-fluid bg-blue">
        <div className="row">
          <div className="col-xl-6 col-;g-12 about-text">
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
            <img src={ourMethods} alt="our-methods" style={{height: "100%", width: "50vw", objectFit: "cover"}}/>
          </div>
        </div>
      </section>
      <section className="container-fluid p-5">
        <div className="row">
          <div className="col-xl-6 col-lg-12" >
            <img src={wall} alt="about-us-homework-space" style={{width: "auto", height: "100%", objectFit: "cover"}} />
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
        <OrangeBar secondaryImage>
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