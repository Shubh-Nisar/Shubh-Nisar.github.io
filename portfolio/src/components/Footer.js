import React from 'react';
import {
    Favorite
} from '@material-ui/icons';
import theme from '../utils/theme';
import styled from 'styled-components';

const Footer = () => {
    return(
        <StyledBtn>
            <p>
                Made with <Favorite style={{
                    color: theme.accent,
                    marginBottom: -6
                }}/> by Shubh Nisar.
            </p>
        </StyledBtn>
    );
};

export default Footer;

const StyledBtn = styled.button`
    background-color: ${theme.bgOffset};
    color: ${theme.color};
    margin: 20px auto;
    padding: 0 10px;
    border-radius: 10px;
    border: none;
    font-size: 14px;
    letter-spacing: 2px;
`;