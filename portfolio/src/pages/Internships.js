import React from 'react';
import styled from 'styled-components';
import { internships } from '../utils/internships';

import {
    StyledDivContainer,
} from '../utils/styles';
import Navbar from '../components/Navbar';
import InternshipCard from '../components/InternshipCard';

const Internships = () => {
    return (
       <StyledDivContainer style={{
           minHeight: '100vh',
           height: 'auto',
       }}>
           <Navbar />
           <h1>Internships.js</h1>
           {Object.entries(internships[0]).map(([key, value], i) => (
                <>
                {console.log(value)}
                <InternshipCard internship={value}/>
                </>
            ))}
       </StyledDivContainer>
    );
};

export default Internships;