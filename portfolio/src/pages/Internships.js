import React from 'react';
import styled, { keyframes } from 'styled-components';
import { internships } from '../utils/internships';

import {
    StyledDivContainer,
} from '../utils/styles';
import Navbar from '../components/Navbar';
import InternshipCard from '../components/InternshipCard';
import {
    fadeInAnimation,
    StyledCreative,
} from '../utils/styles';
import human from '../utils/svgs/internship.svg';
import Footer from '../components/Footer';
import theme from '../utils/theme';

const Internships = () => {
    return (
       <StyledDivContainer style={{
           minHeight: '100vh',
           height: 'auto',
       }}>
           <Navbar />
           <StyledCreative />
           <StyledHumanContainer>
                <h1>
                    <StyledSpan time={3}>Internships </StyledSpan>
                    <StyledSpan time={3.5}>helps </StyledSpan>
                    <StyledSpan time={4}>one </StyledSpan>
                    <StyledSpan time={4.5}>develop </StyledSpan>
                    <StyledSpan time={5}>professional </StyledSpan>
                    <StyledSpan time={5.5}>skills.</StyledSpan>
            </h1>
                <StyledHuman src={human}/>
            </StyledHumanContainer>
            <StyledGrid>
                    {Object.entries(internships[0]).map(([key, value], i) => (
                        <>
                        {console.log(value)}
                        <InternshipCard internship={value}/>
                        </>
                    ))}
            </StyledGrid>
           <Footer />
       </StyledDivContainer>
    );
};

export default Internships;

const StyledHumanContainer = styled.div`
    margin: 24px;
    z-index: 100;

    @media(max-width: 1050px){
        margin-top: 64px;
    }
`;

const StyledGrid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    width: 95%;
    float: right;
    z-index: 100;
`;

const StyledHuman = styled.img`
    text-align: left;
    margin: 0;
    margin-top: 12px;
    width: 95%;
`;

const textAnimation = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        visibility: visible;
        opacity: 1;
        color: ${theme.primary};
    } 
    100%{
        visibility: visible;
        opacity: 1;
        color: ${theme.color};
    }
`;

const StyledSpan = styled.span`
    visibility: hidden;
    animation: ${textAnimation} ease forwards;
    animation-duration: ${props => `${props.time}s`};
`;