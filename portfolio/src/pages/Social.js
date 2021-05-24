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

const Social = () => {
    return(
        <StyledDivContainer style={{
            width: '100%',
            height: '100%',
        }}>
            <Navbar />
            <StyledIntroDivContainer>
                <StyledIntroH1>Connect with me over Social Media!</StyledIntroH1>
                <StyledFlexDiv>
                    <Logo logo={Instagram} extras={social.ig}/>
                    <Logo logo={LinkedIn} extras={social.li}/>
                    <Logo logo={GitHub} extras={social.gi}/>
                    <Logo logo={MailOutline} extras={social.mail}/>
                    <Logo logo={YouTube} extras={social.yt}/>
                </StyledFlexDiv>
                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h4>
                <StyledHuman>
                    <img src={JSON.parse(window.sessionStorage.getItem('portfolio_theme')) ? human_light : human_dark} width={'90%'}/>
                </StyledHuman>
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
    margin: 30px auto;
`;

const StyledIntroH1 = styled.h1`
    visibility: hidden;
    animation: ${fadeInAnimation} ease 2s forwards;
    transition: 1s ease;
    text-align: center;
    margin: 24px auto;

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