import React from 'react';
import StarIcon from '../../images/starIcon.png';
import './style.scss'

const Rating = ({ rating }) => (
  <div className='rating'>
    <img src={StarIcon} className='star_icon' alt="Star Icon" />
    <p className='rating_text'>Rating : {rating}</p>
  </div>
);

export default Rating;