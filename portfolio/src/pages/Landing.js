import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import theme from '../utils/theme';
import styled, { keyframes } from 'styled-components';
import Time from '../components/Time';
import { Brightness3, Brightness7 } from '@material-ui/icons';
import {
    StyledThemeSwitcher,
} from '../utils/styles';

const Home = () => {
    const history = useHistory();
    return (
        <StyledDivContainer>
            <Time size={0} />
            <StyledThemeSwitcher onClick={() => {
                const themeChoice = JSON.parse(window.sessionStorage.getItem('portfolio_theme'));
                window.sessionStorage.setItem('portfolio_theme', !themeChoice);
                window.location.reload();
            }}>
                {JSON.parse(window.sessionStorage.getItem('portfolio_theme')) ? <Brightness3 /> : <Brightness7 style={{ color: '#fafafa' }}/>}
            </StyledThemeSwitcher>
            <StyledProceedBtn onClick={() => history.push('/home')}>
                Click to Proceed
            </StyledProceedBtn>
        </StyledDivContainer>
    );
};

export default Home;

const StyledDivContainer = styled.div`
    background-color: ${theme.bgColor};
    color: ${theme.color};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const proceedAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        visibility: visible;
        opacity: 1;
    }
`;

const StyledProceedBtn = styled.button`
    background-color: ${theme.bgOffset};
    color: ${theme.color};
    margin: 12px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    position: fixed;
    bottom: 25px;
    animation: ${proceedAnimation} ease 2s forwards;
    animation-delay: 1s;
    transition: 1s ease;
    visibility: hidden;

    :hover{
        transform: scale(0.98);
        transition: 0.4s;
        background-color: ${theme.primary};
        color: #fafafa;
    }
`;