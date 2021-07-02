import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { useGlobalContext } from '../context';

import tourPhoto1 from '../img/nat-8.jpg';
import tourPhoto2 from '../img/nat-9.jpg';

const Popup = () => {
  const { setIsPopupOpen, isPopupOpen } = useGlobalContext();

  const closePopupBtn = () => {
    setIsPopupOpen(false);
  };

  const ScrollOnBook = (e) => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div
        className={isPopupOpen ? 'overlay obverlayActive' : 'overlay'}
        onClick={() => setIsPopupOpen(false)}
      ></div>

      <div className={isPopupOpen ? 'popup popupActive' : 'popup'}>
        <div className='popup__left'>
          <img src={tourPhoto1} alt='beautiful tour' className='popup__img' />
          <img src={tourPhoto2} alt='beautiful tour' className='popup__img' />
        </div>

        <div className='popup__right'>
          <FaTimes className='popup__close' onClick={closePopupBtn} />

          <h2 className='heading-secondary mb-small'>Start Booking Now</h2>
          <h3 className='heading-tertiary mb-small'>What are You Waiting for &ndash;</h3>

          <p className='popup__text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo neque velit impedit perspiciatis
            repellendus enim rem corrupti recusandae, sequi tempore alias. Quod voluptas accusantium aut
            voluptates ut, in deleniti inventore rem ad unde? Laudantium, aut, atque dolorem hic impedit
            recusandae magnam nemo modi repellendus harum tempore voluptates veritatis, praesentium soluta.
          </p>

          <div onClick={ScrollOnBook}>
            <a href='#section-booking' className='btn btn--green d-block center-text'>
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
