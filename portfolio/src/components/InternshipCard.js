import React from 'react';
import styled from 'styled-components';

import {
    StyledDivContainer,
    fadeInAnimation,
} from '../utils/styles';
import theme from '../utils/theme';
import {
    FiberManualRecord
} from '@material-ui/icons';

const InternshipCard = ({ internship }) => {
    console.log(internship)
    return (
        <StyledDivContainer style={{
            backgroundColor: theme.bgOffset,
            padding: 18,
            borderRadius: 12,
            width: 300,
            margin: 16,
        }}>
            <StyledAnchor href={internship.linkedin} target="_blank">
                <StyledImgContainer>
                    <img src={process.env.PUBLIC_URL + internship.image} width={280} height={280} style={{
                        borderRadius: '50%',
                    }}/>
                </StyledImgContainer>
                <h5 style={{
                    position: 'relative',
                    bottom: 300,
                    margin: '0 auto',
                    left: -132,
                    color: theme.primary,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    width: 48,
                    textAlign: 'center',
                    padding: 8,
                }}>
                    {internship.duration}
                </h5>
                <StyledTextContainer>
                    <h2 style={{
                        ...hStyled,
                        fontSize: 32,
                        textOverflow: 'ellipsis',
                        overflow: 'hidden', 
                        whiteSpace: 'nowrap',
                        width: 266,
                    }}>
                        {internship.name}
                    </h2>
                    <h4 style={{
                        ...hStyled,
                        color: theme.gray,
                    }}>
                        {internship.position}
                    </h4>
                    <div style={{
                        display: 'block',
                        width: '100%',
                        height: 2,
                        margin: 5,
                        backgroundColor: theme.gray
                    }}></div>
                    <p style={{
                        margin: '2px 6px',
                        fontWeight: 600,
                    }}>Projects</p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        width: '100%',
                    }}>
                        {internship.projects.map(elem => (
                            <StyledProject key={elem}>
                                <FiberManualRecord style={{
                                    fontSize: 10,
                                    marginRight: 4
                                }}/>{elem}
                            </StyledProject>
                        ))}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        width: 280,
                        marginTop: 4,
                        color: theme.primary,
                    }}>
                        {internship.tech.map(elem => (
                            <p style={{ margin: '0px 4px', fontWeight: 600 }} key={elem}>#{elem}
                            </p>
                        ))}
                    </div>
                </StyledTextContainer>
            </StyledAnchor>
        </StyledDivContainer>
    );
};

export default InternshipCard;

const StyledAnchor = styled.a`
    text-decoration: none;
    :visited{
        color: ${theme.color};
    }
`;

const StyledImgContainer = styled.div`
    width: 100%;
    border-radius: 50%;
`;

const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 266px;
`;

const hStyled = {
    textTransform: 'uppercase',
    margin: '2px auto',
};

const StyledProject = styled.p`
    margin: 2px;
`;