import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';
import moment from 'moment';
import theme from '../utils/theme';

const Time = ({ size }) => {
    const [timeNow, setTimeNow] = useState(moment().format('LTS'));
    setInterval(() => {
        setTimeNow(moment().format('LTS'));
    }, 1);

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
    margin: 0;
    padding: 0;
    font-size: ${props => props.size == 0 ? '10vw' : '0.5vw'};
    color: ${theme.color};

    animation: ${borders} ease 2s;
    transition: 1s ease;
    border-bottom: 1px #444 solid;
`;