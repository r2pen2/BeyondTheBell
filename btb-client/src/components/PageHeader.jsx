import { Text } from '@nextui-org/react'
import React from 'react'

import "../assets/style/pageHeader.css";

export default function PageHeader({text}) {
  return (
    <section className="page-header">
      <Text h1 color="white">
        {text}
      </Text>
    </section>
  )
}
