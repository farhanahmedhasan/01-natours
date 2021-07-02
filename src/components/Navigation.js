import React, { useState } from 'react';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const ScrollOnNav = (e) => {
    if (e.target.className === 'navigation__item') return;
    setIsNavOpen(false);
  };

  return (
    <>
      <div className='hamburger' onClick={toggleNav}>
        <span className={isNavOpen ? 'hamburger__icon hamburger__icon--noMiddle' : 'hamburger__icon'}></span>
      </div>

      <div className={isNavOpen ? 'background bgActive' : 'background'}></div>

      <nav className={isNavOpen ? 'navigation active' : 'navigation'}>
        <ul className='navigation__list'>
          <li className='navigation__item' onClick={ScrollOnNav}>
            <a href='#section-about' className='navigation__link'>
              About Natours
            </a>
          </li>

          <li className='navigation__item' onClick={ScrollOnNav}>
            <a href='#section-features' className='navigation__link'>
              Your benifits
            </a>
          </li>

          <li className='navigation__item' onClick={ScrollOnNav}>
            <a href='#section-tours' className='navigation__link'>
              Popular tours
            </a>
          </li>

          <li className='navigation__item' onClick={ScrollOnNav}>
            <a href='#section-stories' className='navigation__link'>
              Stories
            </a>
          </li>

          <li className='navigation__item' onClick={ScrollOnNav}>
            <a href='#section-booking' className='navigation__link'>
              Book now
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
