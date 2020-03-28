import React from 'react'
import styled from 'styled-components'

// import educationData from '../inventory'
import curtin from '../imgs/curtin.png'
import fcc from '../imgs/fcc-small.png'

const EducationPage = styled.section`
  min-height: calc(100vh - 80px);
  max-width: 100vw;
  margin: 0 auto;
`
const EducationItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 10px;
  img {
    margin: 10px;
    max-width: 100%
  }
`

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-left: 30px;


  .title, .subTitle, .school {
    margin: 5% 0;
  }

  .title {
  }
  .subTitle {
  }
  .school {
  }
`


const educationData = [
  {
    id: "bEng",
    imgAddr: {curtin},
    title: "Bachelor of Engineering",
    subTitle: "Software Engineering - Honours",
    school: "Curtin University"
  },
  {
    id: "bSci",
    imgAddr: "../imgs/curtin.png",
    title: "Bachelor of Science",
    subTitle: "Software Engineering",
    school: "Curtin University"
  },
  {
    id: "istqb",
    imgAddr: "../imgs/curtin.png",
    title: "Certified Tester",
    subTitle: "Foundation Level",
    school: "International Software Testing Qualification Board"
  },
  {
    id: "fCC",
    imgAddr: "fcc",
    title: "Certified something",
    subTitle: "Web Dev",
    school: "Free Code Camp"
  }
]


export default function Education() {

  const educationList = educationData.map(item => {
    const alt = `${item.school} logo`
    return (
      <EducationItem key={item.id}>
        <img src={curtin} alt={alt} />
        <Description>
          <div>
              <h2 className="title">{item.title}</h2>
              <h3 className="subTitle">{item.subTitle}</h3>
              <h3 className="school">{item.school}</h3>
          </div>
        </Description>
      </EducationItem>
    )
  })
  
  return <EducationPage id="education-page" >{educationList}</EducationPage>
}
