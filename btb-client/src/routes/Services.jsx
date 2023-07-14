import React, { useContext, useEffect, useState } from 'react'

import { Button, Card, Collapse, Grid, Link, Spacer, Text } from "@nextui-org/react";

import "../assets/style/services.css"
import { PageHeader, } from '../components/Bar';
import { btbOrange } from '../assets/style/colors';
import CheckIcon from '@mui/icons-material/Check';

import { ScheduleBar } from '../components/Forms';
import { WLHeader, WLTextBlock } from '../libraries/Web-Legos/components/Text';
import { doc, getDoc } from 'firebase/firestore';
import { auth, firestore } from '../api/firebase';
import { CurrentUserContext } from '../App';
import { WLImage } from '../libraries/Web-Legos/components/Images';


export default function Services() {

  // Get current user from context
  const { currentUser } = useContext(CurrentUserContext);

  // User Permissions
  const userCanEditText = currentUser ? currentUser.op : false;
  const userCanEditImages = currentUser ? currentUser.op : false;

  const [formModalOpen, setFormModalOpen] = useState(false);

  return (
    <div className="d-flex flex-column">
      <PageHeader 
        text="Our Services"
        sections={[
          {
            title: "After School Programs",
            id: "after-school-programs",
          },
          {
            title: "1 on 1 Tutoring",
            id: "1-on-1-tutoring",
          },
          {
            title: "Dyslexia Therapy",
            id: "dyslexia-therapy",
          },
        ]}
      />
      <section className="container-fluid d-flex flex-column align-items-center w-100 p-xl-5" id="after-school-programs">
        <div className="row">
          <div className="col-xxl-6 col-xl-12 d-flex flex-column px-xl-5 py-5 gap-2">
            <WLHeader firestoreId="after-school-header" color="primary" editable={userCanEditText} />
            <WLTextBlock firestoreId="after-school" editable={userCanEditText} />
          </div>
          <div className="col-xxl-6 col-xl-12">
            <WLImage firestoreId="after-school" className="service-image" editable={userCanEditImages} shadow halfWidth/>
          </div>
        </div>
        <div className="row">
          <div className="col px-xl-5 py-5">
            <div className="container-fluid">
              <Text h2 color="primary">
                Why Sign Up?
              </Text>
              <div className="row">
                <div className="col-xl-6 col-lg-12">
                  <SignUpReason>
                    1 on 1 tutoring in all academic subjects including math, reading, science, and social studies
                  </SignUpReason>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <SignUpReason>
                    Tutoring in executive functioning, study skills, social behavior mapping or any area that requires individual instruction
                  </SignUpReason>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <SignUpReason>
                    Educators provide data confirming your child’s progress and participation
                  </SignUpReason>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <SignUpReason>
                    Regular communication with parents and teachers (if appropriate)
                  </SignUpReason>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="rainbow-line" />
      <section className="container-fluid d-flex flex-column align-items-center w-100 p-xl-5" id="1-on-1-tutoring">
        <div className="row">
          <div className="col-xxl-6 col-xl-12 d-flex flex-column px-xl-5 py-5 gap-2">
            <WLHeader firestoreId="1-on-1-tutoring-header" color="primary" editable={userCanEditText} />
            <WLTextBlock firestoreId="1-on-1-tutoring" editable={userCanEditText} />
          </div>
          <div className="col-xxl-6 col-xl-12">
            <WLImage firestoreId="1-on-1-tutoring" className="service-image" editable={userCanEditImages} shadow halfWidth/>
          </div>
        </div>
        <div className="row">
          <div className="col px-xl-5 py-5">
            <div className="container-fluid">
              <Text h2 color="primary">
                Why Sign Up?
              </Text>
              <div className="row">
                <div className="col-xl-6 col-lg-12">
                  <SignUpReason>
                    Homework support from experienced educators and certified teachers
                  </SignUpReason>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <SignUpReason>
                    A “chillaxing” zone (with hammock swings, bean bags, fidgets, noise cancelling headphones, Chromebook laptops and iPads to access Google Classroom and other resources)
                  </SignUpReason>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <SignUpReason>
                    Study spots (including cozy study carrels, comfy chairs, the work bar, and adjustable height project tables)
                  </SignUpReason>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="rainbow-line" />
      <section className="container-fluid d-flex flex-column align-items-center w-100 p-xl-5" id="dyslexia-therapy">
        <div className="row">
          <div className="col-xxl-6 col-xl-12 d-flex flex-column px-xl-5 py-5 gap-2">
            <WLHeader firestoreId="wilson-tutoring-header" color="primary" editable={userCanEditText} />
            <WLTextBlock firestoreId="wilson-tutoring" editable={userCanEditText} />
          </div>
          <div className="col-xxl-6 col-xl-12">
            <WLImage firestoreId="wilson-tutoring" className="service-image" editable={userCanEditImages} shadow halfWidth/>
          </div>
        </div>
        <div className="row">
          <div className="col px-xl-5 py-5">
            <div className="container-fluid">
              <Text h2 color="primary">
                Why Sign Up?
              </Text>
              <div className="row">
                <div className="col-xxl-4 col-xl-6 col-lg-12">
                  <SignUpReason>
                    Word structure, in depth, for automatic decoding and spelling
                  </SignUpReason>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12">
                  <SignUpReason>
                    Word recognition and spelling of high frequency words, including irregular words
                  </SignUpReason>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12">
                  <SignUpReason>
                    Word-learning skills
                  </SignUpReason>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12">
                  <SignUpReason>
                    Sentence-level text reading with ease, expression, and understanding
                  </SignUpReason>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12">
                  <SignUpReason>
                    Listening comprehension with age-appropriate narrative and informational text
                  </SignUpReason>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12">
                  <SignUpReason>
                    Reading comprehension with narrative and expository text of increasing levels of difficulty
                  </SignUpReason>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12">
                  <SignUpReason>
                    Narrative and informational text structures
                  </SignUpReason>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12">
                  <SignUpReason>
                    Organization of information for oral or written expression
                  </SignUpReason>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12">
                  <SignUpReason>
                    Proofreading skills
                  </SignUpReason>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12">
                  <SignUpReason>
                  Self-monitoring for word recognition accuracy and comprehension
                  </SignUpReason>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScheduleBar open={formModalOpen} setOpen={setFormModalOpen} />
    </div>
  )
}

function SignUpReason(props) {
  return (
    <div className="d-flex flex-row align-items-center px-xl-2 py-2 h-100">
      <Card isHoverable css={{height: "100%"}}>
        <Card.Body>
          <div className="d-flex flex-row align-items-center h-100 gap-2">
            <CheckIcon fontSize="12px" htmlColor={btbOrange} />
            <Text css={{height:"100%", marginTop: 0, marginBottom: 0}} className="d-flex flex-column justify-content-center">
              {props.children}
            </Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}