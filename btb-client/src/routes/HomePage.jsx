import React from 'react'

import { Button, Image, Text } from "@nextui-org/react";

import "../assets/style/homepage.css"

export default function HomePage() {
  return (
    <div className="d-flex flex-column">
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
            size="lg"
          >
            About Us
          </Button>
          <Button
            color="primary"
            rounded
            shadow
            size="lg"
          >
            Contact Us!
          </Button>
        </div>
      </section>
      <section className="d-flex flex-row">
          <div>
            <Text h2>
              Class offerings at BTB December & January!
            </Text>
            <Text p>
              Our classes are AWESOME! Small groups, certified special and regular educators, inclusive and FUN! Join us this winter and find out why kids love BTB. questions@beyondthebelleducation.com or 508.316.4751
            </Text>
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
          </div>
      </section>
    </div>
  )
}

function ClassOffering(props) {
  return (
    <div className="d-flex flex-column align-items-start">
      <Text h3>
        {props.title}
      </Text>
      <Text size="$xl">
        {props.schedule}
      </Text>
      <Text align="left">
        {props.children}
      </Text>
    </div>
  )
}
