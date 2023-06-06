import React, { useState } from 'react'

import { Button, Collapse, Text, Card, Modal, Link } from "@nextui-org/react";

import { OrangeBar, PageHeader } from "../components/Bar"

import "../assets/style/homepage.css"
import { FormModal } from '../components/Forms';

import hulaFrog from "../assets/images/hulafrog-2020.jpg"

export default function HomePage() {

  const [formModalOpen, setFormModalOpen] = useState(false);
  const [testimonialModalOpen, setTestimonialMenuOpen] = useState(false);

  const [currentTestimonialText, setCurrentTestimonialText] = useState("");
  const [currentTestimonialAuthor, setCurrentTestimonialAuthor] = useState("");

  return (
    <div className="d-flex flex-column">
      <Modal 
        closeButton
        width="50vw"
        open={testimonialModalOpen}
        blur
        onClose={() => setTestimonialMenuOpen(false)}
      >
        <Modal.Body>
          <div className="d-flex flex-column align-items-center text-center">
            <Text size="$lg">
              {currentTestimonialText}
            </Text>
            <Text>
              {currentTestimonialAuthor}
            </Text>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex flex-row align-items-center justify-content-center w-100">
            <Button auto flat color="error" onPress={() => setTestimonialMenuOpen(false)} >
                Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <FormModal open={formModalOpen} setOpen={setFormModalOpen} />
      <section className="home-image d-flex flex-column w-100 align-items-center justify-content-center">
        <Text 
          h2
          color="white"
          css={{ 
            textShadow: "0px 0px 5px black",
          }}
        >
          Welcome to
        </Text>
        <Text 
          h1
          css={{ 
            fontSize: "6em",
            filter: "drop-shadow(2px 2px 5px black)",
            textGradient: "45deg, $yellow600 -20%, $btbOrange600 100%",
            width: "50%",
          }}
        >
          Beyond The Bell Educational Services
        </Text>
        <Text 
          h1
          color="white"
          css={{ 
            textShadow: "0px 0px 5px black",
          }}
        >
          Academic enrichment, tutoring, and educational <br/> support programs for today’s learners.
        </Text>
        <div className="d-flex flex-row align-items-center gap-5 mt-5">
          <Button
            bordered
            rounded
            color="gradient"
            size="xl"
            onClick={() => setFormModalOpen(true)}
          >
            Schedule
          </Button>
        </div>
      </section>
      <PageHeader text="See our offerings for December and January!" />
      <section className="d-flex flex-column align-items-center">
        <Collapse.Group css={{width: "80%"}} splitted>
          <ClassOffering title="Friendship Club" schedule="Tuesdays @ 5-6pm (currently full)" >
            Like a playdate with a social coach, our Friendship Clubs are full of fun! Small cohorts of children work together to improve social communication and develop long-lasting meaningful friendships, using games and hands-on, interest-based activities.
          </ClassOffering>
          <ClassOffering title="No More Drama" schedule="Tuesdays @ 5-6pm and 6-7pm" >
            This social skills, female empowerment group will help your daughter gain confidence, empathy and important life skills like conflict resolution and perspective-taking. Lots of laughter and discussion, along with crafts, games, and hands-on activities to we process tricky social situations and plan for social success. Led by Dr. Elyse Rast.
            Please note: this class is only for students identifying as female. Grades 2-5 and 6-9  
          </ClassOffering>
          <ClassOffering title='Intro to "Adulting"' schedule="Thursdays @ 5:30-6:30pm" >
            Middle school and early high school students get a hand acing their many new responsibilities. These include: cell phone and online etiquette, flexibility, time management, organization, planning and prioritizing tasks, goal setting and more. Grades 6-9.
          </ClassOffering>
          <ClassOffering title="Let's get Messy" schedule="Wednesdays @ 5-6pm" >
            What is it about playing with goop that is so much fun? Each session of LGM will include different messy, mushy, squishy activities. Come prepared to make a mess with us! Sensory games and oozy substances are sure to delight!
          </ClassOffering>
          <ClassOffering title="Friday Night Hangouts" schedule="Tuesdays, Wednesdays, and Thursdays @ 3-5pm" >
            Take the stress out of homework and let the educators of BTB help your kids get it done.
          </ClassOffering>
          <ClassOffering title="Math Monsters" schedule="Wednesdays @ 4-5pm" >
            Does your child love math? Fear it? Hate it? This engaging class will make the most timid of number-crunchers become math enthusiasts! With math games and hands-on activities, your kids will be begging for more!
          </ClassOffering>
          <ClassOffering title="Book Club" schedule="Tuesdays @ 4-5pm" >
            Dr. Elyse Rast will explore engaging and meaningful picture books with your children. Each week, there will be a new book paired with a lively discussion, related activities, and games. Whether you have a reluctant reader or a voracious one, exploring picture books is a proven way to engage with learners of all ages while improving fluency and understanding of themes, character, plot development and more. BTB’s Book Club makes reading fun and enjoyable, and may even have your child asking to stop at the library on your way home! Independent readers-5th grade.
          </ClassOffering>
        </Collapse.Group>
      </section>
      <section className="bg-orange p-5">
          <Text h1 color="white">
            What Parents Are Saying
          </Text>
          <div className="container-fluid my-5" >
            <div className="row">
              <Testimonial 
                preview="Thank you so much for the time and dedication you have invested into my daughter. She started off the year timid and reserved due to her dyslexia and fear of being singled out, but has truly blossomed from your interactions."
                author="Allison — Parent"
              >
                "Thank you so much for the time and dedication you have invested in my daughter. She started off the year timid and reserved due to her dyslexia, for fear of being singled out, but has truly blossomed from your interactions. She now has less anxiety and is able to participate in the classroom. Additionally, her self confidence has spread to other areas. She is constantly making new friends and looks forward to attending school daily. Your knowledge and experience in the Wilson Reading System © has paid dividends to her capabilities."
              </Testimonial>
              <Testimonial 
                preview="Jennifer was an excellent tutor who cared very much about my daughter's progress and worked creatively to keep her motivated and engaged."
                author="Melissa — Parent"
              >
                "Jennifer was an excellent tutor who cared very much about my daughter’s progress and worked creatively to keep her motivated and engaged. My daughter and I felt very comfortable with Jennifer from the start, as she is experienced, professional and warm. My daughter made marked progress in her sessions and actually seemed to enjoy them (although she would never admit it). We highly recommend Jennifer!"
              </Testimonial>
              <Testimonial 
                preview="I would be hard pressed to find someone who not only loves working with kids as much as Nancy Mager does, but who truly adores and excels at teaching diverse learners."
                author="Andy — Parent"
              >
                “I would be hard pressed to find someone who not only loves working with kids as much as Nancy Mager does, but who truly adores and excels at teaching diverse learners. Having worked with her both in a professional educational setting and in our personal lives, I have seen time and time again how mindful, compassionate and effective Nancy’s teaching style is."
              </Testimonial>
            </div>
          </div>
      </section>
    </div>
  )

  function Testimonial(props) {

    function handleTestimonialPress() {
      setTestimonialMenuOpen(true);
      setCurrentTestimonialAuthor(props.author);
      setCurrentTestimonialText(props.children);
    }
  
    return (
      <div className="col-xl-4 col-lg-12 p-2">
        <Card 
          isPressable 
          isHoverable 
          css={{
            padding: "2rem", 
            height: "100%"
            }}
            onPress={handleTestimonialPress}
          >
          <Card.Body>
              <div className="text-center d-flex flex-column align-items-center gap-2">
                <Text size="$lg">
                  "{props.preview}"
                </Text>
                <Text>
                  {props.author}
                </Text>
              </div>
            <div className="d-flex flex-column text-center align-items-center justify-content-space-between h-100">
              <Button shadow onClick={handleTestimonialPress}>
                Click to Expand
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

function ClassOffering(props) {
  return (
    <Collapse
      title={props.title}
      bordered 
      shadow
      subtitle={props.schedule}
    >
      <div className="fill-line" />
      <Text align="left">
        {props.children}
      </Text>
    </Collapse>
  )
}