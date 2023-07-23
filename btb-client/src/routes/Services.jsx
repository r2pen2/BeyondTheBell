import React, { useContext, useState } from 'react'

import { Card, Divider, Text } from "@nextui-org/react";

import "../assets/style/services.css"
import { btbOrange } from '../assets/style/colors';
import CheckIcon from '@mui/icons-material/Check';

import { ScheduleBar } from '../components/Forms';
import { WLHeader, WLText } from '../libraries/Web-Legos/components/Text';
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
        firestoreId="social-skills" 
        editable={userCanEditText}
        bottomContent={
          <div className="d-flex flex-column align-items-center justify-content-center" style={{maxWidth: 1400}}>
            <WLHeader headerLevel={2} color="primary" firestoreId="social-skills-details-header" editable={userCanEditText}/>
            <Divider />
            <WLText editable={userCanEditText} firestoreId="social-skills-details" />
          </div>
        }
      />
      <div className="rainbow-line" />
      <WLResponsiveSectionEditable 
        setLoaded={setTutoringLoaded}
        firestoreId="1-on-1-tutoring" 
        editable={userCanEditText} 
        bottomContent={  
          <div className="d-flex flex-column align-items-center justify-content-center" style={{maxWidth: 1400}}>
            <WLHeader headerLevel={2} color="primary" firestoreId="1-on-1-tutoring-details-header" editable={userCanEditText}/>
            <Divider />
            <WLText editable={userCanEditText} firestoreId="1-on-1-tutoring-details" />
          </div>
        }
      />
      <div className="rainbow-line" />
      <WLResponsiveSectionEditable 
        setLoaded={setWilsonTutoringLoaded}
        firestoreId="wilson-tutoring" 
        editable={userCanEditText}
        bottomContent={
          <div className="d-flex flex-column align-items-center justify-content-center" style={{maxWidth: 1400}}>
            <WLHeader headerLevel={2} color="primary" firestoreId="wilson-tutoring-details-header" editable={userCanEditText}/>
            <Divider />
            <WLText editable={userCanEditText} firestoreId="wilson-tutoring-details" />
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