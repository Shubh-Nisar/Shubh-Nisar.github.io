import React from "react";

import Navbar from "../components/Navbar";
import styled, { keyframes } from "styled-components";
import { StyledDivContainer, fadeInAnimation, StyledBtn } from "../utils/styles";
import shubh from "../utils/imgs/Shubh-Nisar.png";
import theme from "../utils/theme";
import Footer from "../components/Footer";
import { extraCurricular } from "../utils/extraCurricular";
import ExtraCurricular from "../components/ExtraCurricular";
import { project } from "../utils/project";
import ProjectCard from "../components/ProjectCard";
import PaperCard from "../components/PaperCard";

const Home = () => {
  setTimeout(() => {
    window.sessionStorage.removeItem("portfolio_page");
  }, 2000);
  return (
    <StyledDivContainer
      style={{
        width: "100%",
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <Navbar />
      <StyledAboutDivContainer>
        <StyledMyImg src={shubh} />
        <StyledTextContainer>
          <StyledH1>Shubh Nisar</StyledH1>
          <h3
            style={{
              color: theme.gray,
              margin: 0,
              fontWeight: 600,
              marginTop: -16,
              marginBottom: 12,
            }}
          >
            Master's with a major in Computer Science @NC STATE UNIVERSITY.
          </h3>
          <p
            style={{
              flexWrap: "wrap",
              margin: 0,
              textAlign: 'justify'
            }}
          >
            {/* I have always been an admirer of the powerful websites out there and
            always wanted to build them myself. As a Front End Web Developer I
            have always felt that the User Interface is very important to engage
            the user.
            <br />
            <br />
            I began my Web Developement journey in May 2020 starting with basic
            HTML and CSS and then moving on to Javascript, React and it's
            various libraries. I have built various projects in ReactJS and
            collaborated with few people to create Frontend + Backend Websites
            both in NodeJS and Django.
            <br />
            <br />
            My Research interests are focused on the domain of Computer Vision and Code-Mixed NLP, and I am happy to collaborate on the same. */}
            I am an adaptable and dedicated computer science professional with a solid background in multiple tools and technologies. I am proficient in languages like Python and TypeScript, frameworks like React and Flask, and cloud resources like AWS and Pulumi. With industrial experience at <i>North Carolina Institute for Climate Studies</i> and <i>Oracle</i>, I find my practical knowledge at par with my theoretical understanding. Besides academics, I extend myself to extra-curricular activities via mentorship and leadership roles in tech and non-tech clubs. I aim to work in a positive environment that supports out-of-the-box thinking and is ready to explore new approaches to solving modern problems. I am excited about the opportunity to contribute my expertise, and I am available for full-time roles. <StyledBtn target="_blank" href="https://drive.google.com/file/d/1A5G_xIOv0AHx-xilQHF0E_oTMFWCDoPL/view?usp=drive_link">Resume</StyledBtn>
          </p>
        </StyledTextContainer>
      </StyledAboutDivContainer>
      
      <StyledExtraCurricular
        style={{
          marginTop: 16,
        }}
      >
        <StyledH1ExtraCurricular>Publications</StyledH1ExtraCurricular>
        <StyledFlex
          style={{
            alignItems: "stretch",
          }}
        >
          {Object.entries(project[0]).map(([key, value], i) => (
            <PaperCard project={value} />
          ))}
        </StyledFlex>
      </StyledExtraCurricular>

      <StyledExtraCurricular style={{
        borderTop: "3px solid #333",
        marginTop: 36
      }}>
        <StyledH1ExtraCurricular>Undergraduate</StyledH1ExtraCurricular>
        <h3
            style={{
              color: theme.gray,
              margin: 0,
              fontWeight: 600,
              marginTop: 8,
              marginBottom: 12,
            }}
          >
            Bachelor of Technology in Computer Engineering @Dwarkadas J. Sanghvi College of Engineering.
          </h3>
        <p
            style={{
              flexWrap: "wrap",
              margin: 0,
              textAlign: "justify"
            }}
          >
          I completed my undergraduate in Computer Engineering from Dwarkadas J. Sanghvi College of Engineering. In my four-year journey, I had the opportunity to grasp the essential knowledge of computer fundamentals. Relevant courses include <i>Analysis of Algorithms</i>, <i>Database Management Systems (DBMS)</i>, <i>Operating Systems</i>, and <i>Machine Learning</i>. My internships and extra-curricular activities have allowed me to explore and implement concepts in tangible projects in the real world, empowering me to excel in both academic pursuits and real-world challenges. Extra-curricular activities facilitated my development in technical, social, and cultural spheres.
        </p>

        <StyledH2ExtraCurricular>Extra Curriculars</StyledH2ExtraCurricular>
        <StyledFlex>
          {Object.entries(extraCurricular[0]).map(([key, value], i) => (
            <>
              {console.log(value)}
              <ExtraCurricular extra={value} />
            </>
          ))}
        </StyledFlex>
      </StyledExtraCurricular>

      <Footer />
    </StyledDivContainer>
  );
};

export default Home;

const StyledAboutDivContainer = styled.div`
  width: 95%;
  margin-top: 75px;

  @media (max-width: 630px) {
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const StyledMyImg = styled.img`
  margin: 12px 30px 0 12px;
  width: 300px;
  height: 300px;
  border-radius: 12px;
  visibility: hidden;
  animation: ${fadeInAnimation} ease 1s forwards;
  transition: 0.5s ease;
  float: left;
`;

const StyledTextContainer = styled.div`
  margin-left: 36px;
  visibility: hidden;
  animation: ${fadeInAnimation} ease 2s forwards;
  transition: 1s ease;

  @media (max-width: 630px) {
    margin-left: 0;
  }
`;

const StyledH1 = styled.h1`
  margin-top: 12px;
  margin-bottom: 0px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 75px;

  @media (max-width: 900px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 630px) {
    text-align: center;
  }
`;

const StyledExtraCurricular = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  visibility: hidden;
  animation: ${fadeInAnimation} ease 2s forwards;
`;

const StyledH1ExtraCurricular = styled.h1`
  margin-bottom: 0 !important;
  border-bottom: rgba(66, 133, 244, 0.7) 5px solid;
`;

const StyledH2ExtraCurricular = styled.h2`
margin-bottom: 0 !important;
border-bottom: rgba(66, 133, 244, 0.7) 5px solid;
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 95%;
  flex-wrap: wrap;
  margin-top: 6px;
`;
