import React from 'react';

const currentPhoto = (props) => {
    return (
        <div className='photo-wrapper'>
            <h2>{props.photo.title}</h2>
            <h5>{props.photo.date}</h5>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </div>
    )
}

export default currentPhoto;