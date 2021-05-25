import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../utils/theme';

const Logo = ({ logo, extras }) => {
    const LogoIcon = logo;
    return (
        <StyledDivContainer logoColor>
            <StyledLogoContainer href={extras.link} target="_blank">
                <LogoIcon style={{
                    fontSize: 150,
                    color: extras.color,
                    width: window.matchMedia('(min-width: 430px)') && 100,
                }}/>
                <h4 style={{ margin: 4, textTransform: 'uppercase', color: theme.color }}>{extras.name}</h4>
            </StyledLogoContainer>
        </StyledDivContainer>
    );
};

export default Logo;

const fadeInAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        visibility: visible;
        opacity: 1;
    }
`;

const StyledDivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 24px;

    :hover{
        transform: scale(0.96);
    }
`;

const StyledLogoContainer = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    animation: ${fadeInAnimation} ease 2s forwards;
    transition: 1s ease;
    text-decoration: none;
    
    :visited{
        color: ${theme.color};
    }
`;