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

import grayWaveTop from "../assets/images/gradient/GrayWaveTop.svg";
import grayWaveBottom from "../assets/images/gradient/GrayWaveBottom.svg";

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
        stackHeader
        bottomContent={
            <div className="py-5 d-flex flex-column align-items-center justify-content-center w-100">
              <img style={{width: "100%", objectFit: "cover"}} src={grayWaveTop} alt="gray-wave-top" />
              <div className="d-flex flex-column align-items-center justify-content-center" style={{maxWidth: 1400, backgroundColor: "#f5f5f5"}}>
                <WLHeader headerLevel={2} color="primary" firestoreId="social-skills-details-header" editable={userCanEditText}/>
                <Divider />
                <WLText editable={userCanEditText} firestoreId="social-skills-details" />
              </div>
              <img style={{width: "100%", objectFit: "cover"}} src={grayWaveBottom} alt="gray-wave-bottom" />
            </div>
          }
      />
      <WLResponsiveSectionEditable 
        setLoaded={setTutoringLoaded}
        firestoreId="1-on-1-tutoring" 
        editable={userCanEditText} 
        stackHeader
        bottomContent={  
          <div className="py-5 d-flex flex-column align-items-center justify-content-center w-100">
            <img style={{width: "100%", objectFit: "cover"}} src={grayWaveTop} alt="gray-wave-top" />
            <div className="d-flex flex-column align-items-center justify-content-center" style={{maxWidth: 1400, backgroundColor: "#f5f5f5"}}>
              <WLHeader headerLevel={2} color="primary" firestoreId="1-on-1-tutoring-details-header" editable={userCanEditText}/>
              <Divider />
              <WLText editable={userCanEditText} firestoreId="1-on-1-tutoring-details" />
            </div>
            <img style={{width: "100%", objectFit: "cover"}} src={grayWaveBottom} alt="gray-wave-bottom" />
          </div>
        }
      />
      <WLResponsiveSectionEditable 
        setLoaded={setWilsonTutoringLoaded}
        firestoreId="wilson-tutoring" 
        editable={userCanEditText}
        stackHeader
        bottomContent={
          <div className="py-5 d-flex flex-column align-items-center justify-content-center w-100">
            <img style={{width: "100%", objectFit: "cover"}} src={grayWaveTop} alt="gray-wave-top" />
            <div className="d-flex flex-column align-items-center justify-content-center" style={{maxWidth: 1400, backgroundColor: "#f5f5f5"}}>
              <WLHeader headerLevel={2} color="primary" firestoreId="wilson-tutoring-details-header" editable={userCanEditText}/>
              <Divider />
              <WLText editable={userCanEditText} firestoreId="wilson-tutoring-details" />
            </div>
            <img style={{width: "100%", objectFit: "cover"}} src={grayWaveBottom} alt="gray-wave-bottom" />
          </div>
        }
      />
      <ScheduleBar open={formModalOpen} setOpen={setFormModalOpen} />
    </WLSpinnerPage>
  )
}