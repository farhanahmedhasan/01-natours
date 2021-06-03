import React from 'react';
import logo from '../img/logo-white.png';

const Header = () => {
  const discoverOurTour = (e) => {
    e.preventDefault();
  };

  return (
    <header className='header'>
      <div className='header__logo-box'>
        <img src={logo} alt='Your Best Tour Guide' className='header__logo' />
      </div>

      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>Outdoors</span>
          <span className='heading-primary--sub'>is where life happens</span>
        </h1>
        <a href='/about' className='btn btn--white btn--animated' onClick={discoverOurTour}>
          Discover Our Tours
        </a>
      </div>
    </header>
  );
};

export default Header;
