import React, { useState, useContext } from 'react';

import theme from '../utils/theme';
import styled from 'styled-components';
import Time from '../components/Time';
import { Brightness3, Brightness7 } from '@material-ui/icons';

const Home = () => {
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

const StyledThemeSwitcher = styled.button`
    position: fixed;
    top: 25px;
    right: 25px;
    border-radius: 12px;
    border: none;
    padding: 12px;
    background-color: ${!JSON.parse(window.sessionStorage.getItem('portfolio_theme')) && '#222'};

    :hover{
        transform: scale(0.98);
        transition: 0.4s;
    }
`;