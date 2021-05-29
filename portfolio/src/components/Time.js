import React, { useState, useContext } from 'react';

import styled, { keyframes } from 'styled-components';
import moment from 'moment';
import theme from '../utils/theme';
import { GlobalContext } from '../GlobalContext';

const Time = ({ size }) => {
    const { contextTime } = useContext(GlobalContext);
    const [ timeInConext, setTimeInContext ] = contextTime;
    const [timeNow, setTimeNow] = useState(moment().format('LTS'));
    setInterval(() => {
        setTimeNow(moment().format('LTS'));
        setTimeInContext(moment().format('LTS'));
    }, 1000);

    return(
        <StyledTime className='bigTime' size={size}>{timeNow.split(':')[0]}:{timeNow.split(':')[1]} {timeNow.split(':')[2].split(' ')[1]}</StyledTime>
    );
};

export default Time;

const borders = keyframes`
    0%{ 
        border-bottom: 0px ${theme.color} solid; 
        padding-bottom: 25%;
    }
    50%{ 
        border-bottom: 1px ${theme.color} solid; 
    }
    100%{ 
        border-bottom: 1px #444 solid; 
    }
`;

const StyledTime = styled.p`
    margin: ${props => props.size != 0 ? '6px' : '0'};
    padding: 0;
    font-size: ${props => props.size == 0 ? '10vw' : '24px'};
    color: ${theme.color};
    font-weight: ${props => props.size != 0 && 600};
    z-index: 100;

    animation: ${borders} ease;
    animation-duration: ${props => props.size == 0 && '2s'};
    transition: 1s ease;
    border-bottom: ${props => props.size == 0 && '1px #444 solid'};

    
    @media(max-width: 1050px){
        position: ${props => props.size != 0 && 'absolute'};
        left: ${props => props.size != 0 && '25vw'};
    }

    @media(max-width: 769px){
        position: ${props => props.size != 0 && 'absolute'};
        top: ${props => props.size != 0 && '43px'} !important;
        left: ${props => props.size != 0 && '50%'};
        transform: ${props => props.size != 0 && 'translate(-50%, -50%)'};
    }

    @media(max-width: 445px){
        position: ${props => props.size != 0 && 'absolute'};
        top: ${props => props.size != 0 && 90};
        left: ${props => props.size != 0 && '49%'};
        transform: ${props => props.size != 0 && 'translate(-50%, -50%)'};
    }

    @media(max-width: 445px){
        left: ${props => props.size != 0 && '45%'};
    }
`;