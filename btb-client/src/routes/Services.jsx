import React from 'react'

import { Button, Collapse, Grid, Link, Spacer, Text } from "@nextui-org/react";

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
            contentLeft={<SchoolIcon htmlColor={btbOrange} />}
            expanded

          >
            <div className="fill-line dotted"></div>
            <div className="d-flex flex-row align-items-center">
              <div className="d-flex flex-column p-5 gap-2">
                <Text h1 color="primary">
                  After School at BTB
                </Text>
                <Text>
                  The BTB After School Program offers students in K-8 a warm and relaxing environment where they can unwind with friends and get homework done under the guidance of attentive, professional educators.
                </Text>
                <Text>
                  The BTB After School Program is a place where all students are welcome. Your child’s potential will be unleashed when our enthusiastic teachers connect with your child and partner with both of you in reaching his or her goals. Our low student-to-teacher ratios, creative programming, and modern youthful space will be a place where every child is, and feels, accepted.
                </Text>
                <Text h2 color="primary">
                  Why Sign Up?
                </Text>
                <Text>
                  • 1 on 1 tutoring in all academic subjects including math, reading, science, and social studies
                </Text>
                <Text>
                  • Tutoring in executive functioning, study skills, social behavior mapping or any area that requires individual instruction
                </Text>
                <Text>
                  • Educators provide data confirming your child’s progress and participation
                </Text>
                <Text>
                  • Regular communication with parents and teachers (if appropriate)
                </Text>
              </div>
              <img src={afterSchool} alt="after-school" className="service-image"/>
            </div>
          </Collapse>
          <Collapse 
            title="1 on 1 Tutoring" 
            bordered 
            shadow
            subtitle="Dive into individualized learning at BTB"
            contentLeft={<EditIcon htmlColor={btbOrange} />}
            expanded
          >
            <div className="fill-line dotted"></div>
            <div className="d-flex flex-row align-items-center">
              <div className="d-flex flex-column p-5 gap-2">
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
                <Text>
                  • Homework support from experienced educators and certified teachers
                </Text>
                <Text>
                  • A “chillaxing” zone (with hammock swings, bean bags, fidgets, noise cancelling headphones, Chromebook laptops and iPads to access Google Classroom and other resources)
                </Text>
                <Text>
                  • Study spots (including cozy study carrels, comfy chairs, the work bar, and adjustable height project tables)
                </Text>
              </div>
              <img src={tutoring} alt="private-tutoring" className="service-image"/>
            </div>
          </Collapse>
          <Collapse 
            title="Dyslexia Therapist/Wilson Tutoring" 
            bordered 
            shadow
            subtitle="Uncover Tailored Dyslexia Support at BTB"
            contentLeft={<AutoStoriesIcon htmlColor={btbOrange} />}
            expanded
          >
            <div className="fill-line dotted"></div>
            <div className="d-flex flex-row align-items-center">
              <div className="d-flex flex-column p-5 gap-2">
                <Text h1 color="primary">
                  Wilson Tutoring at BTB
                </Text>
                <Text>
                  Using the <Link href="https://www.wilsonlanguage.com/programs/wilson-reading-system/" target="blank" color="success">Wilson Reading System©</Link>, a multi-sensory approach to literacy instruction, BTB offers direct instruction with a Level II certified Wilson reading specialist for students whose basic literacy skills are below that of their peers, despite conventional interventions.
                </Text>
                <Text>
                  This system is very effective for those who have been unable to learn to read due to language based learning disabilities like dyslexia. Our Dyslexia Therapist will combine Wilson instruction and silent reading of high interest books to facilitate real progress in the area of literacy. Using the Wilson diagnostic assessments, we will be able to follow your student's progress through out the program.
                </Text>
                <Text h2 color="primary">
                  Why Sign Up?
                </Text>
                <div className="d-flex flex-row">
                  <div>
                    <Text align="start">
                      • Word structure, in depth, for automatic decoding and spelling
                    </Text>
                    <Text align="start">
                      • Word recognition and spelling of high frequency words, including irregular words
                    </Text>
                    <Text align="start">
                      • Word-learning skills
                    </Text>
                    <Text align="start">
                      • Sentence-level text reading with ease, expression, and understanding
                    </Text>
                    <Text align="start">
                      • Listening comprehension with age-appropriate narrative and informational text
                    </Text>
                  </div>
                  <div>
                    <Text align="start">
                      • Reading comprehension with narrative and expository text of increasing levels of difficulty
                    </Text>
                    <Text align="start">
                      • Narrative and informational text structures
                    </Text>
                    <Text align="start">
                      • Organization of information for oral or written expression
                    </Text>
                    <Text align="start">
                      • Proofreading skills
                    </Text>
                    <Text align="start">
                      • Self-monitoring for word recognition accuracy and comprehension
                    </Text>
                  </div>
                </div>
              </div>
              <img src={dyslexia} alt="wilson-tutoring" className="service-image"/>
            </div>
          </Collapse>
        </Collapse.Group>
      </section>
    </div>
  )
}