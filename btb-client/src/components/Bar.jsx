import { Button, Link, Text } from '@nextui-org/react'
import React from 'react'

import "../assets/style/bar.css";

import "../libraries/Web-Legos/assets/style/text.css";
import { WLHeader } from '../libraries/Web-Legos/components/Text';

export function PageHeader({text, sections}) {
  
  function renderButtons() {
    if (!sections) { return; }
    return sections.map((section, index) => {

      function handleClick() {
        if (section.openCollapse) {
          section.openCollapse();
        } else {
          window.location.hash = "";
          window.location.hash = `#${section.id}`;
        }
      }

      return (
        <div key={index} className="col-lg-3 col-md-12 d-flex flex-column align-items-center">
          <Link block key={index} color="white" size="md" onClick={handleClick}>
            <Text color="white">
              {section.title}
            </Text>
          </Link>
        </div>
      )
    })
  }

  return (
    <section className="orange-bar">
      <WLHeader color="white">
        {text}
      </WLHeader>
      { sections && (
        <div className="container">
          <div className="row d-flex flex-row justify-content-center">
            { renderButtons() }
          </div>
        </div>
      ) }
    </section>
  )
}

export function OrangeBar(props) {
  return (
    <section className={"orange-bar"}>
      {props.children}
    </section>
  )
}