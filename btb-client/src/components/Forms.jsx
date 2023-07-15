import { Modal, Button, Text, Card } from "@nextui-org/react"

import { AfterSchoolIcon, ContractIcon, ScholarshipIcon, SchoolDaysIcon, iconFills } from './Icons';

import LaunchIcon from '@mui/icons-material/Launch';
import { afterSchoolFormLink, scholarshipLink, schoolContractLink, schoolDayFormLink } from '../api/links';
import { OrangeBar } from "./Bar";
import { WLHeader } from "../libraries/Web-Legos/components/Text";
import { useContext } from "react";
import { CurrentUserContext } from "../App";

function FormCard({icon, title, formType, href}) {

  function handleFormCardPress(href) {
    window.open(href, "_blank");
  }

  return (
    <Card 
      isHoverable 
      isPressable
      variant="bordered" 
      onPress={() => handleFormCardPress(href)}
      css={{flex:1}}
    >
      <Card.Body>
        <div className="d-flex flex-row align-items-center justify-content-space-between">
          {icon}
          <div className="d-flex flex-column align-items-start justify-content-center w-100">
            <Text b>
              {title}
            </Text>
            {`Click to open ${formType}`}
          </div>
          <LaunchIcon />
        </div>
      </Card.Body>
    </Card>
  )
}

export function SchoolDaysFormCard() {
  return (
    <FormCard 
      icon={<SchoolDaysIcon marginRight="1rem" fill={iconFills.orange} size={"3rem"} />}
      title="School Days at BTB" 
      formType="application" 
      href={schoolDayFormLink}
    />
  )
}

export function AfterSchoolFormCard() {
  return (
    <FormCard
      icon={<AfterSchoolIcon marginRight="1rem" fill={iconFills.red} size={"3rem"} />}
      title="After School at BTB"
      formType="application"
      href={afterSchoolFormLink}
    />
  )
}

export function SchoolYearFormCard() {
  return (
    <FormCard
      icon={<ContractIcon marginRight="1rem" fill={iconFills.blue} size={"3rem"} />}
      title="2020/21 School Year"
      formType="contract"
      href={schoolContractLink}
    />
  )
}

export function ScholarshipFormCard() {
  return (
    <FormCard
      icon={<ScholarshipIcon marginRight="1rem" fill={iconFills.green} size={"3rem"} />}
      title="The Little Fiddle Scholarship"
      formType="application"
      href={scholarshipLink}
    />
  )
}

export function ScheduleBar({open, setOpen}) {


  const { currentUser } = useContext(CurrentUserContext)

  const userCanEditText = currentUser ? currentUser.op : false;

  return (
    <div>
      <section>
        <OrangeBar>
          <WLHeader headerLevel={3} firestoreId="call-to-action" editable={userCanEditText} color="white"/>
          <Button size="xl" bordered color="gradient" shadow onClick={() => setOpen(true)}>
            Schedule A Session
          </Button>
        </OrangeBar>
      </section>
      <FormModal open={open} setOpen={setOpen}/>
    </div>
  )
}

export function FormModal({open, setOpen}) {
  
  function VerticalModalContent() {

    return (
      <div className="d-flex flex-column">
        <div className="mt-2">
          <SchoolDaysFormCard />
        </div>
        <div className="mt-2">
          <AfterSchoolFormCard />
        </div>
        <div className="mt-2">
          <SchoolYearFormCard />
        </div>
        <div className="mt-2">
          <ScholarshipFormCard />
        </div>
      </div>
    )
  }


  
  return (
    <Modal
      closeButton
      width="80vw"
      open={open}
      blur
      onClose={() => setOpen(false)}
    >
      <Modal.Header>
        <Text h3 size="$md" id="modal-title">
          Select a service to open the form in a new tab.
        </Text>
      </Modal.Header>
      <Modal.Body>
        <VerticalModalContent />
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex flex-row align-items-center justify-content-center w-100">
          <Button auto flat color="error" onPress={() => setOpen(false)} >
              Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}