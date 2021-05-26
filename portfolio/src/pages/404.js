import React from 'react';
import styled from 'styled-components';
import img404 from '../utils/imgs/404.png';
import theme from '../utils/theme';
import {
    StyledThemeSwitcher,
    fadeInAnimation,
} from '../utils/styles';
import { Brightness3, Brightness7 } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();
    return (
        <StyledDiv>
            <StyledThemeSwitcher onClick={() => {
                const themeChoice = JSON.parse(window.sessionStorage.getItem('portfolio_theme'));
                window.sessionStorage.setItem('portfolio_theme', !themeChoice);
                window.location.reload();
            }}>
                {JSON.parse(window.sessionStorage.getItem('portfolio_theme')) ? <Brightness3 /> : <Brightness7 style={{ color: '#fafafa' }}/>}
            </StyledThemeSwitcher>
            <StyledImg src={img404} />
            <StyledTextDiv>
                <StyledH1 style={{
                    color: theme.color,
                    margin: 4,
                }}>You seem lost!</StyledH1>
                <StyledBtn onClick={() => history.push('/')}>
                    Save Me
                </StyledBtn>
            </StyledTextDiv>            
        </StyledDiv>
    );
};

export default NotFound;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${theme.bgColor};
    visibility: hidden;
    animation: ${fadeInAnimation} ease 3s forwards;

    @media(max-width: 1000px){
        flex-direction: column;
        justify-content: flex-start;
    }

    @media(max-width: 600px){
        justify-content: center;
    }
`;

const StyledImg = styled.img`
    width: 50%;
    @media(max-width: 1000px){
        width: 75%;
    }
    @media(max-width: 600px){
        width: 90%;
    }
`;

const StyledTextDiv = styled.div`
    text-align: center;
    margin: 0 auto;
`;

const StyledBtn = styled.button`
    border-radius: 12px;
    border: none;
    padding: 12px;
    background-color: ${!JSON.parse(window.sessionStorage.getItem('portfolio_theme')) ? '#222' : '#EEE'};
    font-size: 24px;
    color: ${theme.color};

    :hover{
        background-color: ${theme.primary};
    }
`;

const StyledH1 = styled.h1`
    font-size: 75px;
    @media(max-width: 600px){
        font-size: 48px;
    }
`;