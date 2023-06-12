import { Button, Link, Text } from '@nextui-org/react'
import React from 'react'

import "../assets/style/bar.css";

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
      <Text h1 color="white">
        {text}
      </Text>
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