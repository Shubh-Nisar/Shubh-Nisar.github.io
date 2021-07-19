import React from "react";

import Navbar from "../components/Navbar";
import styled, { keyframes } from "styled-components";
import { StyledDivContainer, fadeInAnimation } from "../utils/styles";
import shubh from "../utils/imgs/shubh.jpeg";
import theme from "../utils/theme";
import Footer from "../components/Footer";
import { extraCurricular } from "../utils/extraCurricular";
import ExtraCurricular from "../components/ExtraCurricular";
import { project } from "../utils/project";
import ProjectCard from "../components/ProjectCard";

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
            Computer Engineering Student @Dwarkadas J. Sanghvi College of
            Engineering [2023].
          </h3>
          <p
            style={{
              flexWrap: "wrap",
              margin: 0,
            }}
          >
            I have always been an admirer of the powerful websites out there and
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
            Recently, I have found my interest in Machine Learning and it's
            application over various datasets and wish to explore more in that
            field.
          </p>
        </StyledTextContainer>
      </StyledAboutDivContainer>
      <StyledExtraCurricular>
        <StyledH1ExtraCurricular>Extra Curricular</StyledH1ExtraCurricular>
        <StyledFlex>
          {Object.entries(extraCurricular[0]).map(([key, value], i) => (
            <>
              {console.log(value)}
              <ExtraCurricular extra={value} />
            </>
          ))}
        </StyledFlex>
      </StyledExtraCurricular>
      <StyledExtraCurricular
        style={{
          marginTop: 16,
        }}
      >
        <StyledH1ExtraCurricular>Projects</StyledH1ExtraCurricular>
        <StyledFlex
          style={{
            alignItems: "stretch",
          }}
        >
          {Object.entries(project[0]).map(([key, value], i) => (
            <ProjectCard project={value} />
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
  margin: 12px 12px 0 12px;
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

const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 95%;
  flex-wrap: wrap;
  margin-top: 6px;
`;
