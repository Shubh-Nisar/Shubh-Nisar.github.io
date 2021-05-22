import React from 'react';

import Time from '../components/Time';
import Navbar from '../components/Navbar';
import styled, { keyframes } from 'styled-components';
import {
    StyledDivContainer
} from '../utils/styles';
import shubh from '../utils/imgs/shubh.jpeg';
import theme from '../utils/theme';

const Home = () => {
    return (
        <StyledDivContainer style={{
            width: '100%',
            height: '100vh',
        }}>
            <Navbar />
            <StyledAboutDivContainer>
                <StyledMyImg src={shubh}/>
                <StyledTextContainer>
                    <StyledH1>Shubh Nisar</StyledH1>
                    <h3 style={{
                        color: theme.gray,
                        margin: 0,
                        fontWeight: 600,
                    }}>II<sup>nd</sup> Year Computer Engineering Student @Dwarkadas J. Sanghvi College of Engineering.</h3>
                    <p style={{
                        flexWrap: 'wrap'
                    }}>
                        I have always been an admirer of the powerful websites out there and always wanted to build them myself. As a Front End Web Developer I have always felt that the User Interface is one of the key to engage the user.<br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </StyledTextContainer>
            </StyledAboutDivContainer>
        </StyledDivContainer>
    );
};

export default Home;

const StyledAboutDivContainer = styled.div`
    width: 95%;
    margin-top: 75px;

    @media(max-width: 630px){
        display: flex;
        align-self: center;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

const fadeInAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        visibility: visible;
        opacity: 1;
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

    @media(max-width: 630px){
        margin-left: 0;
    }
`;

const StyledH1 = styled.h1`
    margin-top: 12px;
    margin-bottom: 0px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 75px;

    @media(max-width: 900px){
        font-size: 56px;
    }

    @media(max-width: 768px){
        font-size: 36px;
    }

    @media(max-width: 630px){
        text-align: center;
    }
`;