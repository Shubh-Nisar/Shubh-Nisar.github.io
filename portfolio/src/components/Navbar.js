import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Time from './Time';
import styled from 'styled-components';
import {
    StyledDivContainer,
    StyledThemeSwitcher,
    StyledNavBtns,
    StyledNavHamburger,
} from '../utils/styles';
import { Brightness3, Brightness7 } from '@material-ui/icons';
import theme from '../utils/theme';
import logo_light from '../utils/gifs/logo_light.gif';
import logo_dark from '../utils/gifs/logo_dark.gif';
import {
    Button,
    Menu,
    MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Home = () => {
    const history = useHistory();

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    return (
        <>
        <StyledDivContainer style={{
            marginTop: 25,
            width: '100%',
        }}>
            <StyledGif src={
                JSON.parse(window.sessionStorage.getItem('portfolio_theme')) ?
                logo_light :
                logo_dark
            } onClick={() => history.push('/home')}/>
            <Time />
            <StyledNavFlex>
                <StyledNavBtns onClick={() => history.push('/hackathons')}>Hackathons</StyledNavBtns>
                <StyledNavBtns onClick={() => history.push('/internships')}>Internships</StyledNavBtns>
                <StyledNavBtns onClick={() => history.push('/social')}>Social</StyledNavBtns>
            </StyledNavFlex>
            <StyledThemeSwitcher onClick={() => {
                const themeChoice = JSON.parse(window.sessionStorage.getItem('portfolio_theme'));
                window.sessionStorage.setItem('portfolio_theme', !themeChoice);
                window.location.reload();
            }} style={{ position: 'absolute' }}>
                {JSON.parse(window.sessionStorage.getItem('portfolio_theme')) ? <Brightness3 /> : <Brightness7 style={{ color: '#fafafa' }}/>}
            </StyledThemeSwitcher>
            <StyledNavHamburger aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon style={{ color: theme.color }}/>
            </StyledNavHamburger>
            <StyledMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} style={{ 
                    color: theme.color,
                    backgroundColor: theme.bgOffset,
                }} onClick={() => history.push('/hackathons')}>
                    Hackathons
                </MenuItem>
                <MenuItem onClick={handleClose} style={{ 
                    color: theme.color,
                    backgroundColor: theme.bgOffset,
                }} onClick={() => history.push('/internships')}>
                    Internships
                </MenuItem>
                <MenuItem onClick={handleClose} style={{ 
                    color: theme.color,
                    backgroundColor: theme.bgOffset,
                }} onClick={() => history.push('/social')}>
                    Social
                </MenuItem>
            </StyledMenu>
        </StyledDivContainer>
        </>
    );
};

export default Home;

const StyledGif = styled.img`
    width: 85px;
    height: 85px;
    position: absolute;
    left: 15px;
    top: 8px;
`;

const StyledNavFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 25px;
    right: 100px;

    @media(max-width: 768px){
        display: none;
    }
`;

const StyledMenu = styled(Menu)`
    color: ${theme.color};
`;