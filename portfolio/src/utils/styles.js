import styled, { keyframes } from 'styled-components';
import theme from './theme';

export const StyledDivContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: ${theme.color};
background-color: ${theme.bgColor};
`;

export const StyledThemeSwitcher = styled.button`
position: fixed;
top: 25px;
right: 25px;
border-radius: 12px;
border: none;
padding: 12px;
background-color: ${!JSON.parse(window.sessionStorage.getItem('portfolio_theme')) ? '#222' : '#EEE'};

:hover{
    transform: scale(0.98);
    transition: 0.4s;
}
`;

export const StyledNavHamburger = styled.button`
position: absolute;
top: 25px;
right: 85px;
border-radius: 12px;
border: none;
padding: 12px;
background-color: ${!JSON.parse(window.sessionStorage.getItem('portfolio_theme')) ? '#222' : '#EEE'};

:hover{
    transform: scale(0.98);
    transition: 0.4s;
}

@media(min-width: 769px){
    display: none;
}
`;

export const StyledNavBtns = styled.button`
border-radius: 12px;
border: none;
padding: 16px 12px;
margin: 0 8px;
text-transform: uppercase;
background-color: transparent;
color: ${theme.color};

:hover{
    transform: scale(0.98);
    transition: 0.4s;
    background-color: ${theme.primary};
    color: #fafafa;
}
`;

export const fadeInAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        visibility: visible;
        opacity: 1;
    }
`;

export const StyledCreative = styled.div`
    width: 100vw;
    position: fixed;
    top: 50%;
    left: 20%;
    z-index: 10;
    transform: rotate(45deg);
    height: 24px;
    background-color: ${theme.bgOffset};

    @media(max-width: 1300px){
        display: none;
    }
`;