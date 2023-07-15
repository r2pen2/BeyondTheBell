import React, { useContext, useState } from 'react'

import { Card, Text } from "@nextui-org/react";

import "../assets/style/services.css"
import { btbOrange } from '../assets/style/colors';
import CheckIcon from '@mui/icons-material/Check';

import { ScheduleBar } from '../components/Forms';
import { WLHeader } from '../libraries/Web-Legos/components/Text';
import { CurrentUserContext } from '../App';
import { WLResponsiveSectionEditable, WLSpinnerPage } from '../libraries/Web-Legos/components/Layout';
import { ServicesBlockHeader } from '../components/Bar';


export default function Services() {

  const [afterSchoolLoaded, setAfterSchoolLoaded] = useState(false);
  const [tutoringLoaded, setTutoringLoaded] = useState(false);
  const [wilsonTutoringLoaded, setWilsonTutoringLoaded] = useState(false);

  // Get current user from context
  const { currentUser } = useContext(CurrentUserContext);

  // User Permissions
  const userCanEditText = currentUser ? currentUser.op : false;

  const [formModalOpen, setFormModalOpen] = useState(false);

  return (
    <WLSpinnerPage dependencies={[afterSchoolLoaded, tutoringLoaded, wilsonTutoringLoaded]}>
      <ServicesBlockHeader />
      <WLResponsiveSectionEditable 
        setLoaded={setAfterSchoolLoaded}
        firestoreId="after-school" 
        editable={userCanEditText}
        bottomContent={
          <div className="row">
            <div className="col px-xl-5 py-5">
              <div className="container-fluid">
                <WLHeader headerLevel={2} color="primary" firestoreId="sign-up-header" editable={userCanEditText}/>
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
        }
      />
      <div className="rainbow-line" />
      <WLResponsiveSectionEditable 
        setLoaded={setTutoringLoaded}
        firestoreId="1-on-1-tutoring" 
        editable={userCanEditText} 
        bottomContent={  
          <div className="row">
            <div className="col px-xl-5 py-5">
              <div className="container-fluid">              
                <WLHeader headerLevel={2} color="primary" firestoreId="sign-up-header" editable={userCanEditText}/>
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
        }
      />
      <div className="rainbow-line" />
      <WLResponsiveSectionEditable 
        setLoaded={setWilsonTutoringLoaded}
        firestoreId="wilson-tutoring" 
        editable={userCanEditText}
        bottomContent={
          <div className="row">
            <div className="col px-xl-5 py-5">
              <div className="container-fluid">
                <WLHeader headerLevel={2} color="primary" firestoreId="sign-up-header" editable={userCanEditText}/>
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
        }
      />
      <ScheduleBar open={formModalOpen} setOpen={setFormModalOpen} />
    </WLSpinnerPage>
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