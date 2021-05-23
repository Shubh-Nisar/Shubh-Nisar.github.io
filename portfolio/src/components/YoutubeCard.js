import {
    StyledDivContainer,
} from '../utils/styles';
import React from 'react';
import styled from 'styled-components';
import theme from '../utils/theme';

const YoutubeCard = ({ details }) => {
    return (
        <StyledDivContainer style={{
            height: 'auto',
            alignItems: 'flex-start',
        }}>
            <div style={{
                width: '100%',
                border: `2px solid ${theme.bgOffset}`,
                marginTop: 0,
                borderRadius: 6,
            }}>
                <StyledIFrameContainer>
                    {details.embedded}
                </StyledIFrameContainer>
                <StyledDetailContainer>
                    <h1 style={{
                        margin: '0 8px',
                    }}>{details.name}</h1>
                    <h3 style={{
                        color: theme.gray,
                        verticalAlign: 'middle',
                        textTransform: 'uppercase',
                        margin: 'auto 8px',
                    }}>{details.organizer}</h3>
                </StyledDetailContainer>
                <h4 style={{
                    margin: '0 8px',
                }}>Number of Members: {details.noOfMembers}</h4>
                <div style={{
                    display: 'inline-block',
                    position: 'relative',
                    top: -35,
                    float: 'right',
                    alignSelf: 'right',
                    right: 20,
                    color: theme.gray,
                    marginBottom: -40,
                    fontWeight: 600,
                    fontSize: 24,
                }}>
                    {details.time}
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <h3 style={{
                        margin: 'auto 8px',
                        color: theme.primary,
                    }}>Result: {details.result}</h3>
                    <StyledBtn href={details.github} target="_blank">
                        Github Repository
                    </StyledBtn>
                </div>
            </div>
        </StyledDivContainer>
    );
};

export default YoutubeCard;

const StyledIFrameContainer = styled.div`
    width: 100%;
    height: 280px;
    z-index: 1;
`;

const StyledDetailContainer = styled.div`
    width: 98%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

const StyledBtn = styled.a`
    background-color: ${theme.bgOffset};
    color: ${theme.color};
    margin: 10px;
    padding: 8px;
    border-radius: 8px;
    border: none;
    font-size: 14px;
    text-decoration: none;
    
    :hover{
        transform: scale(0.98);
        transition: 0.4s;
        background-color: ${theme.primary};
        color: #fafafa;
    }
`;