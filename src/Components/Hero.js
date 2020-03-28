import React from 'react'
import styled from 'styled-components'
import headshot from '../imgs/me.jpg'

const HeroPage = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  background: lightgrey;
`
const Img = styled.img`
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 20px;
  
`
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`

export default function Hero() {
  return (
    <HeroPage>
      <Img src={headshot} alt="Headshot of Shaun Gedye" />
      <Title>Shaun Gedye</Title>
      <Title>(HERO PAGE)</Title>
    </HeroPage>
  )
}
