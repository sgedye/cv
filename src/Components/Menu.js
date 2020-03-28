import React from 'react'
import styled from 'styled-components'

const MenuBar = styled.div`
  //make it a nav????
  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100vw;
  background: pink;
`
const Title = styled.h1`
  margin: 0;
`

export default function Menu() {
  return (
    <MenuBar>
      <Title>My Menu</Title>
    </MenuBar>
  )
}
