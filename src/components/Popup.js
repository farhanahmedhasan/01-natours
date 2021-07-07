import React, { useMemo } from 'react';
import { FaTimes } from 'react-icons/fa';

import tourPhoto1 from '../img/nat-8.jpg';
import tourPhoto2 from '../img/nat-9.jpg';

import { useGlobalContext } from '../context';
import { closePopupBtn } from '../context';

const Popup = () => {
  const [state, dispatch] = useGlobalContext();

  return useMemo(() => {
    const ScrollOnBook = () => {
      closePopupBtn(dispatch);
    };

    return (
      <>
        <div
          className={state.isPopupOpen ? 'overlay obverlayActive' : 'overlay'}
          onClick={() => closePopupBtn(dispatch)}
        ></div>

        <div className={state.isPopupOpen ? 'popup popupActive' : 'popup'}>
          <div className='popup__left'>
            <img src={tourPhoto1} alt='beautiful tour' className='popup__img' />

            <img src={tourPhoto2} alt='beautiful tour' className='popup__img' />
          </div>

          <div className='popup__right'>
            <FaTimes className='popup__close' onClick={() => closePopupBtn(dispatch)} />

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
  }, [dispatch, state.isPopupOpen]);
};

export default Popup;
