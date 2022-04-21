import React from 'react';
import styled from 'styled-components';

const currentPhoto = (props) => {
    return (
        <StyledPhoto>
            <h2>{props.photo.title}</h2>
            <h5>{props.photo.date}</h5>
            <img src={props.photo.hdurl} />
            <p className='description'>{props.photo.explanation}</p>
        </StyledPhoto>
    )
}

const StyledPhoto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    border: 5px solid greenyellow;

    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};

    transition: all .3s ease-in-out;
    &:hover {
        background-color: ${props => props.theme.quaternaryColor};
        transition: all .3s ease-in-out;
    }

    p {
        color: ${props => props.theme.secondaryColor};
    }

    h2 {
        color: ${props => props.theme.primaryColor};
    }

    h5 {
        color: ${props => props.theme.tertiaryColor};
    }

    img {
        max-width: 95vw;
    }

    .description {
        max-width: 75vw;
    }
`

export default currentPhoto;
