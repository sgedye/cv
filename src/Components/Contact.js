import React from 'react'
import styled from "styled-components"

const ContactPage = styled.section`
  min-height: calc(100vh - 80px);
`

export default function Contact() {
  return (
    <ContactPage id="contact-page" >
      <h2>Contact</h2>
    </ContactPage>
  )
}
