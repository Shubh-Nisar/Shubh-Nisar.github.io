import React from 'react';
import styled, { keyframes } from 'styled-components';

import Navbar from '../components/Navbar';
import {
    StyledDivContainer,
    fadeInAnimation,
} from '../utils/styles';
import Logo from '../components/Logo';
import {
    Instagram,
    LinkedIn,
    GitHub,
    MailOutline,
    YouTube
} from '@material-ui/icons';
import social from '../utils/jsons/social.json';
import human_light from '../utils/svgs/human_light.svg';
import human_dark from '../utils/svgs/human_dark.svg';
import Footer from '../components/Footer';
import theme from '../utils/theme';

const Social = () => {
    return(
        <StyledDivContainer style={{
            width: '100%',
            minHeight: '100vh',
            height: 'auto',
        }}>
            <Navbar />
            <StyledIntroDivContainer>
                <StyledHuman>
                    <img src={JSON.parse(window.sessionStorage.getItem('portfolio_theme')) ? human_light : human_dark} width={'90%'}/>
                </StyledHuman>
                <StyledIntroH1>
                    <StyledSpan time={3}>Engage. </StyledSpan>
                    <StyledSpan time={3.5}>Enlighten. </StyledSpan>
                    <StyledSpan time={4}>Encourage. </StyledSpan>
                </StyledIntroH1>
                <h3 style={{
                    alignSelf: 'center',
                    justifySelf: 'center',
                    textAlign: 'center',
                    margin: 'auto',
                }}> 
                    <q>
                    Social Media is a community effort and everyone is an asset.
                    </q><br /><span style={{
                        textAlign: 'right',
                        marginLeft: '25%',
                    }}> ~ Susan Cooper</span>
                </h3>
                <StyledFlexDiv>
                    <Logo logo={Instagram} extras={social.ig}/>
                    <Logo logo={LinkedIn} extras={social.li}/>
                    <Logo logo={GitHub} extras={social.gi}/>
                    <Logo logo={MailOutline} extras={social.mail}/>
                    <Logo logo={YouTube} extras={social.yt}/>
                </StyledFlexDiv>
            </StyledIntroDivContainer>
            <Footer />
        </StyledDivContainer>
    );
};

export default Social;

const StyledIntroDivContainer = styled.div`
    width: 95%;
    margin-top: 35px;
`;

const StyledHuman = styled.div`
    width: 55%;
    text-align: center;
    margin: 0px auto;

    @media(max-width: 1050px){
        width: 70%;
        margin-top: 32px;
    }

    @media(max-width: 768px){
        width: 95%;
        margin-top: 32px;
    }
`;

const StyledIntroH1 = styled.h1`
    visibility: hidden;
    animation: ${fadeInAnimation} ease 2s forwards;
    transition: 1s ease;
    text-align: center;
    margin: 24px auto;
    margin-top: 48px;

    @media(max-width: 430px){
        margin: 48px auto 12px auto;
    }
`;

const StyledFlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
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