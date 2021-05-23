import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import {
    StyledDivContainer,
    fadeInAnimation,
} from '../utils/styles';
import YoutubeCard from '../components/YoutubeCard';
import { hackathon } from '../utils/hackathon';
import human from '../utils/svgs/hackathon.svg';
import Footer from '../components/Footer';
import theme from '../utils/theme';

const Hackathons = () => {
    return(
        <StyledDivContainer style={{
            height: '100%',
        }}>
            <Navbar />
            <div style={{
                margin: '24px 0'
            }}>
                <StyledHuman src={human} width={200}/>
                <h2>
                    <q>There is no such thing as a long piece of work, except one that you dare not start.</q>
                    <i>- Charles Baudelaire</i>
                </h2>
            </div>
            <h1 style={{
                position: 'relative',
                top: -20,
                borderBottom: `${theme.primary} 3px solid`,
            }}>
                Hackathons
            </h1>
            <StyledGrid>
                {Object.entries(hackathon[0]).map(([key, value], i) => (
                    <YoutubeCard details={value}/>
                ))}
            </StyledGrid>
            <Footer />
        </StyledDivContainer>
    );
};

export default Hackathons;

const StyledHuman = styled.img`
    float: left;
    width: 200px;
    visibility: hidden;
    animation: ${fadeInAnimation} ease 2s forwards;
`;

const StyledGrid = styled.div`
    width: 95%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    row-gap: 20px;
    column-gap: 40px;
    height: auto;
    visibility: hidden;
    animation: ${fadeInAnimation} ease 2s forwards;
`;