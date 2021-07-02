import React, { useState } from 'react';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className='hamburger' onClick={toggleNav}>
        <span className={isNavOpen ? 'hamburger__icon hamburger__icon--noMiddle' : 'hamburger__icon'}></span>
      </div>

      <div className={isNavOpen ? 'background bgActive' : 'background'}></div>

      <nav className={isNavOpen ? 'navigation active' : 'navigation'}>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <a href='/d' className='navigation__link'>
              About Natours
            </a>
          </li>

          <li className='navigation__item'>
            <a href='/d' className='navigation__link'>
              Your benifits
            </a>
          </li>

          <li className='navigation__item'>
            <a href='/d' className='navigation__link'>
              Popular tours
            </a>
          </li>

          <li className='navigation__item'>
            <a href='/d' className='navigation__link'>
              Stories
            </a>
          </li>

          <li className='navigation__item'>
            <a href='/d' className='navigation__link'>
              Book now
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
