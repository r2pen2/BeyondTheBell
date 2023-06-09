import { Button, Link, Text } from '@nextui-org/react'
import React from 'react'

import "../assets/style/bar.css";

export function PageHeader({text, sections}) {
  
  function renderButtons() {
    if (!sections) { return; }
    return sections.map((section, index) => {
      return (
        <div className="col-lg-3 col-md-12 d-flex flex-column align-items-center">
          <Link block key={index} color="white" href={"#" + section.id} size="md">
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
      <div className="container">
        <div className="row">
          { renderButtons() }
        </div>
      </div>
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