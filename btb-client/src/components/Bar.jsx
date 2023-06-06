import { Text } from '@nextui-org/react'
import React from 'react'

import "../assets/style/bar.css";

export function PageHeader({text}) {
  return (
    <section className="orange-bar">
      <Text h1 color="white">
        {text}
      </Text>
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