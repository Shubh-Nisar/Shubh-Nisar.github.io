import React from 'react';
import styled from 'styled-components';

import {
    StyledDivContainer,
} from '../utils/styles';
import theme from '../utils/theme';
import {
    FiberManualRecord
} from '@material-ui/icons';

const ExtraCurricular = ({ extra }) => {
    return (
        <StyledDivContainer style={{
            margin: 20,
        }}>
            <StyledRowFlex href={extra.linkedin} target="_blank">
                <StyledImg src={process.env.PUBLIC_URL + extra.image} />
                <StyledTextContainer>
                    <h2 style={{
                        ...styleH,
                        fontSize: 36,
                        textOverflow: 'ellipsis',
                        overflow: 'hidden', 
                        whiteSpace: 'nowrap',
                    }}>{extra.name}</h2>
                    <h4 style={{
                        ...styleH,
                        color: theme.gray,
                    }}>
                        {extra.type} | 
                        <FiberManualRecord style={{
                            fontSize: 10,
                            marginLeft: 6,
                            marginRight: -2,
                        }}/> {extra.field}
                    </h4>
                    <p style={{
                        fontSize: 64,
                        color: theme.gray,
                        margin: 'auto',
                        justifySelf: 'center',
                    }}>{extra.duration}
                    <sup style={{
                        fontSize: 16,
                        color: theme.gray,
                        margin: 2,
                    }}>MON</sup>
                    </p>
                    <div style={{
                        justifySelf: 'flex-end',
                        margin: 'auto 0',
                        alignSelf: 'flex-start'
                    }}>
                        {extra.position.map(elem => (
                            <p style={{
                                ...styleH,
                                justifySelf: 'flex-end',
                                alignSelf: 'flex-start',
                                color: theme.primary,
                                margin: 'auto'
                            }}># {elem}</p>
                        ))}
                    </div>
                </StyledTextContainer>
            </StyledRowFlex>
        </StyledDivContainer>
    );
};

export default ExtraCurricular;

const StyledRowFlex = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 24px;
    border: ${theme.bgOffset} 5px solid;
    min-width: 450px;
    background-color: ${theme.bgOffset};
    text-decoration: none;
    color: ${theme.color};

    :visited{
        color: ${theme.color};
    }

    @media(max-width: 525px){
        flex-direction: column;
        min-width: 20px;
        justify-content: center;
    }
`;

const StyledImg = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 24px;
`;

const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;

    @media(max-width: 525px){
        align-self: center;
    }
`;

const styleH = {
    margin: 2,
    textTransform: 'uppercase',
};