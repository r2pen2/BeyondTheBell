import React from 'react'

import { Button, Card, Collapse, Grid, Link, Spacer, Text } from "@nextui-org/react";

import "../assets/style/services.css"
import { PageHeader, } from '../components/Bar';
import homeworkSpace from "../assets/images/about-us-homework-space2.jpg"
import afterSchool from "../assets/images/after-school.jpg"
import dyslexia from "../assets/images/wilson-reading-tutoring.jpg"
import tutoring from "../assets/images/tutoring-placeholder.jpg"
import SchoolIcon from '@mui/icons-material/School';
import { btbOrange } from '../assets/style/colors';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CheckIcon from '@mui/icons-material/Check';

import EditIcon from '@mui/icons-material/Edit';
import { AfterSchoolIcon, BookIcon, PencilIcon, iconFills } from '../components/Icons';

export default function Services() {
  return (
    <div className="d-flex flex-column">
      <PageHeader text="Our Services" />
      <section className="d-flex flex-column align-items-center w-100">
        <Collapse.Group splitted css={{width: "80%"}} accordion={false}>
          <Collapse 
            title="After School Programs" 
            bordered 
            shadow
            subtitle="Explore after-school enrichment at BTB"
            contentLeft={<AfterSchoolIcon fill={iconFills.orange} />}
          >
            <div className="fill-line dotted" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12 d-flex flex-column p-5 gap-2">
                  <Text h1 color="primary">
                    After School at BTB
                  </Text>
                  <Text>
                    The BTB After School Program offers students in K-8 a warm and relaxing environment where they can unwind with friends and get homework done under the guidance of attentive, professional educators.
                  </Text>
                  <Text>
                    The BTB After School Program is a place where all students are welcome. Your child’s potential will be unleashed when our enthusiastic teachers connect with your child and partner with both of you in reaching his or her goals. Our low student-to-teacher ratios, creative programming, and modern youthful space will be a place where every child is, and feels, accepted.
                  </Text>
                </div>
                <div className="col-lg-6 col-md-12">
                  <img src={afterSchool} alt="after-school" className="service-image"/>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Text h2 color="primary">
                    Why Sign Up?
                  </Text>
                  <SignUpReason>
                    1 on 1 tutoring in all academic subjects including math, reading, science, and social studies
                  </SignUpReason>
                  <SignUpReason>
                    Tutoring in executive functioning, study skills, social behavior mapping or any area that requires individual instruction
                  </SignUpReason>
                  <SignUpReason>
                    Educators provide data confirming your child’s progress and participation
                  </SignUpReason>
                  <SignUpReason>
                    Regular communication with parents and teachers (if appropriate)
                  </SignUpReason>
                </div>
              </div>
            </div>
          </Collapse>
          <Collapse 
            title="1 on 1 Tutoring" 
            bordered 
            shadow
            subtitle="Dive into individualized learning at BTB"
            contentLeft={<PencilIcon fill={iconFills.red} />}
          >
            <div className="fill-line dotted" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12 d-flex flex-column p-5 gap-2">
                  <Text h1 color="primary">
                    1 on 1 Tutoring at BTB
                  </Text>
                  <Text>
                    Beyond The Bell respects all children for their unique learning profiles. We believe that all children will thrive when provided with appropriate accommodations, positive behavioral supports and skilled, engaging educators.
                  </Text>
                  <Text>
                    Beyond The Bell provides carefully organized, one-hour tutoring sessions in all areas of academics. Students engaging with BTB tutoring services receive the necessary assistance in subjects like math, reading, science, and social studies.
                  </Text>
                  <Text h2 color="primary">
                    Why Sign Up?
                  </Text>
                  <SignUpReason>
                    Homework support from experienced educators and certified teachers
                  </SignUpReason>
                  <SignUpReason>
                    A “chillaxing” zone (with hammock swings, bean bags, fidgets, noise cancelling headphones, Chromebook laptops and iPads to access Google Classroom and other resources)
                  </SignUpReason>
                  <SignUpReason>
                    Study spots (including cozy study carrels, comfy chairs, the work bar, and adjustable height project tables)
                  </SignUpReason>
                </div>
                <div className="col-lg-6 col-md-12">
                  <img src={tutoring} alt="private-tutoring" className="service-image"/>
                </div>
              </div>
            </div>
          </Collapse>
          <Collapse 
            title="Dyslexia Therapist/Wilson Tutoring" 
            bordered 
            shadow
            subtitle="Uncover Tailored Dyslexia Support at BTB"
            contentLeft={<BookIcon fill={iconFills.blue} />}
          >
            <div className="fill-line dotted" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12 d-flex flex-column p-5 gap-2">
                  <Text h1 color="primary">
                    Wilson Tutoring at BTB
                  </Text>
                  <Text>
                    Using the <Link isExternal href="https://www.wilsonlanguage.com/programs/wilson-reading-system/" target="blank" color="success">Wilson Reading System©</Link>, a multi-sensory approach to literacy instruction, BTB offers direct instruction with a Level II certified Wilson reading specialist for students whose basic literacy skills are below that of their peers, despite conventional interventions.
                  </Text>
                  <Text>
                    This system is very effective for those who have been unable to learn to read due to language based learning disabilities like dyslexia. Our Dyslexia Therapist will combine Wilson instruction and silent reading of high interest books to facilitate real progress in the area of literacy. Using the Wilson diagnostic assessments, we will be able to follow your student's progress through out the program.
                  </Text>
                  <Text h2 color="primary">
                    Why Sign Up?
                  </Text>
                  <div className="d-flex flex-row">
                    <div>
                      <SignUpReason>
                        Word structure, in depth, for automatic decoding and spelling
                      </SignUpReason>
                      <SignUpReason>
                        Word recognition and spelling of high frequency words, including irregular words
                      </SignUpReason>
                      <SignUpReason>
                        Word-learning skills
                      </SignUpReason>
                      <SignUpReason>
                        Sentence-level text reading with ease, expression, and understanding
                      </SignUpReason>
                      <SignUpReason>
                        Listening comprehension with age-appropriate narrative and informational text
                      </SignUpReason>
                    </div>
                    <div>
                      <SignUpReason>
                        Reading comprehension with narrative and expository text of increasing levels of difficulty
                      </SignUpReason>
                      <SignUpReason>
                        Narrative and informational text structures
                      </SignUpReason>
                      <SignUpReason>
                        Organization of information for oral or written expression
                      </SignUpReason>
                      <SignUpReason>
                        Proofreading skills
                      </SignUpReason>
                      <SignUpReason>
                        Self-monitoring for word recognition accuracy and comprehension
                      </SignUpReason>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <img src={dyslexia} alt="wilson-tutoring" className="service-image"/>
                </div>
              </div>
            </div>
          </Collapse>
        </Collapse.Group>
      </section>
    </div>
  )
}

function SignUpReason(props) {
  return (
    <div className="d-flex flex-row align-items-center p-2">
      <Card isHoverable>
        <div className="d-lg-none d-md-flex flex-column align-items-center p-2">
          <Card.Body>
            <Text>
              {props.children}
            </Text>
          </Card.Body>
        </div>
        <div className="d-lg-flex d-md-none">
          <Card.Body>
            <div className="d-flex flex-row align-items-center gap-2">
              <CheckIcon fontSize="12px" htmlColor={btbOrange} />
              <Text>
                {props.children}
              </Text>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  )
}