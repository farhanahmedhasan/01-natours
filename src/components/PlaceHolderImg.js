import React from 'react';
// import '../styles/components/_placeHolderImg.scss';
import dummy from '../img/dummy.png';

const PlaceHolderImg = ({ Reffer }) => {
  return (
    <div className='composition' ref={Reffer}>
      <img src={dummy} alt={dummy} className='composition__photo composition__photo--1 placeholder' />
      <img src={dummy} alt={dummy} className='composition__photo composition__photo--2 placeholder' />
      <img src={dummy} alt={dummy} className='composition__photo composition__photo--3 placeholder' />
    </div>
  );
};

export default PlaceHolderImg;
