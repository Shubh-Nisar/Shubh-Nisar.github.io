import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import {
    StyledBtn,
} from '../utils/styles';
import {
    FiberManualRecord,
    GitHub,
} from '@material-ui/icons';

const PaperCard = ({ project }) => {
    return (
        <StyledDivContainer style={{
            // backgroundColor: theme.bgOffset,
            border: `${theme.bgOffset} 2px solid`,
            padding: 0,
            borderRadius: 6,
            margin: 16,
        }}>
            <StyledTextDiv>
                <StyledH1 style={{
                    alignSelf: 'center',
                    margin: 0,
                    textTransform: 'uppercase',
                }}>{project.title} {project.link && <StyledBtn href={project.link} target="_blank" style={{
                    margin: 4
                }}>Link</StyledBtn> }
                    <p style={{ margin: '0px 4px', fontWeight: 600, color: theme.primary, alignSelf: 'center' }}>
                        <FiberManualRecord style={{
                        fontSize: 10,
                        marginRight: 2 }}/>{project.tech}</p>
                </StyledH1>
            </StyledTextDiv>
        </StyledDivContainer>
    );
};

export default PaperCard;

const StyledH1 = styled.h2`
    font-size: 16px;
    @media(max-width: 400px){
        font-size: 20px;
    }
`;

const StyledDivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.color};
    background-color: ${theme.bgColor};
    width: 80%;
    /* min-height: 280px; */

    @media(max-width: 500px){
        width: 95%;
    }
`;

const StyledTextDiv = styled.div`
    width: 98%;
    align-self: center;
    justify-self: center;
    margin: 4px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 6px;
`;