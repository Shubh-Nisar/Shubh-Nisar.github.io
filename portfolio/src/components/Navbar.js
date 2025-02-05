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

const Navbar = () => {
    const history = useHistory();
    const page = window.location.href.split('/')[3];

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      const activeStyle = {
        background: theme.primary,
        color: '#fafafa',
        fontWeight: 600,
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
                <StyledNavBtns onClick={() => history.push('/hackathons')} style={page === 'hackathons' ? activeStyle : {}}>Hackathons</StyledNavBtns>
                <StyledNavBtns onClick={() => history.push('/internships')} style={page === 'internships' ? activeStyle : {}}>Internships</StyledNavBtns>
                <StyledNavBtns onClick={() => history.push('/social')} style={page === 'social' ? activeStyle : {}}>Social</StyledNavBtns>
            </StyledNavFlex>
            <StyledThemeSwitcher onClick={() => {
                const themeChoice = JSON.parse(window.sessionStorage.getItem('portfolio_theme'));
                window.sessionStorage.setItem('portfolio_theme', !themeChoice);
                const page = window.location.href.split("/")[3];
                console.log(page);
                // window.location.reload();
                // DUE TO GH PAGES RE-ROUTED TO "/" ROUTE
                history.push('/');
                window.location.reload();
                window.sessionStorage.setItem('portfolio_page', JSON.stringify(page), page);
            }} style={{ position: 'absolute' }}>
                {JSON.parse(window.sessionStorage.getItem('portfolio_theme')) ? <Brightness3 /> : <Brightness7 style={{ color: '#fafafa' }}/>}
            </StyledThemeSwitcher>
            <StyledNavHamburger aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon style={{ color: theme.color }}/>
            </StyledNavHamburger>
            <div style={{
                backgroundColor: theme.bgOffset
            }}>
            <StyledMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem style={{ 
                    color: theme.color,
                    backgroundColor: theme.bgOffset,
                    width: '98vw',
                    borderBottom: `${theme.gray} 1px solid`,
                }} onClick={() => {
                    handleClose();
                    history.push('/hackathons')
                    }}>
                    Hackathons
                </MenuItem>
                <MenuItem style={{ 
                    color: theme.color,
                    backgroundColor: theme.bgOffset,
                    borderBottom: `${theme.gray} 1px solid`,
                }} onClick={() => {
                    handleClose();
                    history.push('/internships')
                    }}>
                    Internships
                </MenuItem>
                <MenuItem style={{ 
                    color: theme.color,
                    backgroundColor: theme.bgOffset,
                }} onClick={() => {
                    handleClose();
                    history.push('/social')
                    }}>
                    Social
                </MenuItem>
            </StyledMenu>
            </div>
        </StyledDivContainer>
        </>
    );
};

export default Navbar;

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
    position: fixed !important;
    top: 65px !important;
    width: 100vw !important;

    @media(min-width: 769px){
        display: none;
    }
`;