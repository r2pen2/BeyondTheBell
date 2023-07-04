import React from 'react'

import { Text, } from "@nextui-org/react";

import "../assets/style/services.css"
import { PageHeader, } from '../components/Bar';
import { serverURL } from '../App';

export default function ThankYou() {
  return (
    <div className="d-flex flex-column align-items-center">
      <PageHeader text="Thank You" />
      <section className="d-flex flex-column align-items-center justify-content-center m-5 w-80">
        <Text>
          Thank you for contacting us. We look forward to speaking with you and hearing more about how we can be of assistance. We will be in touch with you soon.
        </Text>
        <img src={`${serverURL}images/thankyou.jpg`} alt="thank-you" className="img-shadow"/>
      </section>
    </div>
  )
}