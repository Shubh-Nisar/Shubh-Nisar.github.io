import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router-dom';
import theme from '../utils/theme';

const Logo = ({ logo, extras }) => {
    const history = useHistory();
    const LogoIcon = logo;
    return (
        <StyledDivContainer>
            <StyledLogoContainer href={extras.link} target="_blank">
                <LogoIcon style={{
                    fontSize: 150,
                    color: extras.color,
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