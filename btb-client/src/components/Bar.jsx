import React from 'react'

import "../assets/style/bar.css";

import "../libraries/Web-Legos/assets/style/text.css";
import { WLBlockHeader } from '../libraries/Web-Legos/components/Text';
import { blockHeaderColor } from '../assets/style/colors';

export function OrangeBar(props) {
  return (
    <section className={"orange-bar"}>
      {props.children}
    </section>
  )
}

export function AboutBlockHeader() {
  return (
    <WLBlockHeader 
      text="About Beyond the Bell"
      color={blockHeaderColor}
    >
      <WLBlockHeader.Section sectionId="developing-all-learners" title="Developing All Learners" />
      <WLBlockHeader.Section sectionId="meet-the-director" title="Meet The Team" />
      <WLBlockHeader.Section sectionId="our-methods" title="Our Methods" />
      <WLBlockHeader.Section sectionId="our-learning-center" title="Our Learning Center" />
    </WLBlockHeader>
  )
}


export function ContactBlockHeader() {
  return <WLBlockHeader short color={blockHeaderColor} text="Contact / Register" />;
}

export function GalleryBlockHeader() {
  return <WLBlockHeader short color={blockHeaderColor} text="Gallery" />;
}

export function ServicesBlockHeader() {
  return (
    <WLBlockHeader
      color={blockHeaderColor} 
      text="Our Services"
    >
      <WLBlockHeader.Section sectionId="after-school" title="After School Programs" />
      <WLBlockHeader.Section sectionId="1-on-1-tutoring" title="1 on 1 Tutoring" />
      <WLBlockHeader.Section sectionId="wilson-tutoring" title="Dyslexia Therapy" />
    </WLBlockHeader>
  )

}

export function ThankYouBlockHeader() {
  return <WLBlockHeader short color={blockHeaderColor} text="Thank You" />;
}