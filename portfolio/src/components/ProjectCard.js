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

const ProjectCard = ({ project }) => {
    return (
        <StyledDivContainer style={{
            // backgroundColor: theme.bgOffset,
            border: `${theme.bgOffset} 2px solid`,
            padding: 0,
            borderRadius: 6,
            margin: 16,
        }}>
            <div style={{
                width: '100%',
                height: 200,
            }}>
                {project.yt}
            </div>
            <StyledTextDiv>
                <StyledH1 style={{
                    alignSelf: 'center',
                    margin: 0,
                    textTransform: 'uppercase',
                }}>{project.title}</StyledH1>
                <StyledBtn href={project.github} target="_blank" style={{
                    margin: 4
                }}>
                    <GitHub style={{
                        fontSize: 16,
                        color: theme.color,
                        marginBottom: -2,
                        marginRight: 4
                    }}/>Repository
                </StyledBtn>
            </StyledTextDiv>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                width: '100%',
                color: theme.primary,
            }}>
                {project.tech.map(elem => (
                    <p style={{ margin: '0px 4px', fontWeight: 600, color: theme.primary, alignSelf: 'center' }} key={elem}><FiberManualRecord style={{
                        fontSize: 10,
                        marginRight: 2
                    }}/>{elem}
                    </p>
                ))}
            </div>
        </StyledDivContainer>
    );
};

export default ProjectCard;

const StyledH1 = styled.h2`
    @media(max-width: 374px){
        font-size: 20px;
    }
`;

const StyledDivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.color};
    background-color: ${theme.bgColor};
    width: 450px;
    min-height: 280px;

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