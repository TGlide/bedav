import React, { useEffect } from 'react'
import styled from 'styled-components'
import QuestionContainer from './QuestionContainer'
import Question from './Question'
import Answer from './Answer'

const MainContainer = styled.div`
  width: 90%;
  max-width: 700px;
  margin: 80px auto 0;
  font-family: "Quicksand", sans-serif;

  & a, & a:visited {
    color: #0071a6;
    word-wrap: break-word;
  }

  & a:hover {
    color: #003e5c;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 95px;
  }
`

const PageHeading = styled.h1`
  font-size: 30px;
  margin: 0 0 20px 0;
`

function AboutPage() {
  useEffect(() => {
    document.title = "Bedav - About"
  })

  const faq = {
    "Is this official?": "No, this is not official. However, the data is from official sources. Look below for more info.",
    "Who are you?": "My name is Shreyas, and I am a student currently in the 11th grade and studying at Delhi Public School Bangalore East in Bangalore.",
    "What are your sources?": `
      Sources for the respective cities are:
      <br>
      <b>Bengaluru</b>: <a href="https://apps.bbmpgov.in/covidbedstatus/">BBMP (Bruhat Bengaluru Mahanagara Palike)</a>
      <br>
      <b>Pune, Kolapur, Sangli, Satara, Solapur</b>: <a href="https://www.divcommpunecovid.com/ccsbeddashboard/hsr">https://www.divcommpunecovid.com/ccsbeddashboard/hsr</a>
      `,
    "How often is the data updated?": "The data is fetched from the sources every few hours, but it is updated only when the data has changed.",
    "Can I get access to the data?": "You can explore the current GraphQL API at <a href='/graphql'>Bedav GraphQL API</a>. However, this is just meant for the website. I am currently working on an API that everyone can use to get access to all the data available.",
    "Can I contribute?": "Yes, you can! Email me at <a href='mailto:shreyas.sreenivasa@gmail.com'>shreyas.sreenivasa@gmail.com</a>",
    "Is this only for Bengaluru?": "Currently yes it is only for Bengaluru. However, we are looking to expand to other cities quickly."
  }

  const items = Object.keys(faq).map((question, index) => {
    return (
      <QuestionContainer key={index}>
        <Question>
          {question}
        </Question>
        <Answer>
          {faq[question]}
        </Answer>
      </QuestionContainer>
    )
  })

  return (
    <MainContainer>
      <PageHeading>
        About
      </PageHeading>
      {items}
    </MainContainer>
  )
}

export default AboutPage

