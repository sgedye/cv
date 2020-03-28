import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledMenu = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  height: ${({ open }) => (open ? "0" : "calc(100vh - 80px)")};
  top: 80px;
  left: 0;
  right: 0;
  z-index: 3;
  transition: height 0.3s ease-in-out;
  & > a {
    transition: ${({ open }) =>
      open
        ? "visibility 0.2s ease-in-out 0ms"
        : "visibility 0.2s ease-in-out 200ms"};
    visibility: ${({ open }) => (open ? "hidden" : "visible")};
  }
  // @media (max-width: 576px) {
  //   width: 100%;
  // }
`
const NavItem = styled.a`
  font-size: 2em;
  text-align: center;
  text-decoration: none;
  padding: 5% 0;
`

const MenuContainer = styled.nav`
  position: sticky;
  top: 0px;
`
const MenuBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background: green;
`
const MenuIcon = styled.article`
  position: absolute;
  left: 20px;
`
const Burger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 9999;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    align-self: center;
    background: ${({ open }) => (open ? "blue" : "red")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      width: ${({ open }) => (open ? "0rem" : "2rem")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
const Title = styled.h1`
  text-align: center;
  margin: 0 auto;
`

export default function Menu(props) {

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  // function noScroll() {
  //   window.scrollTo(0, 0)
  // }

  // open ? window.addEventListener("scroll", noScroll) :window.removeEventListener("scroll", noScroll)
  // // useEffect((open) => {
  // //   if (open) {
  // //     window.addEventListener("scroll", noScroll)
  // //   }
  // //   return (!o
  // // })

  return (
    <MenuContainer>
      <MenuBar>
        <MenuIcon>
          <Burger open={open} onClick={() => handleOpen(open)}>
            <div />
            <div />
            <div />
          </Burger>
        </MenuIcon>
        <Title>{props.title}</Title>
      </MenuBar>
      <StyledMenu open={!open}>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/">Education</NavItem>
        <NavItem href="/">Abiltiies</NavItem>
        <NavItem href="/">Projects</NavItem>
        <NavItem href="/">Testamonials ??? </NavItem>
        <NavItem href="/">Contact</NavItem>
      </StyledMenu>
    </MenuContainer>
  )
}


// When open deactivate scroll






/* Original Attempt
//
// const MenuBar = styled.div`
//   //make it a nav????
//
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 80px;
//   width: 100vw;
//   background: pink;
// `
// const Title = styled.h1`
//   text-align: center;
// `
//
// export default function Menu(props) {
//   return (
//     <MenuContainer className="navbar">
//       <MenuBar>
//         <Title>{props.title}</Title>
//       </MenuBar>
//     </MenuContainer>
//   )
// }
*/