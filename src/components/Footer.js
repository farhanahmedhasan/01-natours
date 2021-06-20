import React from 'react';
import logo from '../img/logo-green-1x.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logoBox center-text mb-mid'>
        <img src={logo} alt='Natour logo' className='footer__logo' />
      </div>
      <div className='row'>
        <div className='col-6'>
          <div className='footer__navigation'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='/' className='footer__link'>
                  Company
                </a>
              </li>

              <li className='footer__item'>
                <a href='/' className='footer__link'>
                  Contact Us
                </a>
              </li>

              <li className='footer__item'>
                <a href='/' className='footer__link'>
                  Carrer
                </a>
              </li>

              <li className='footer__item'>
                <a href='/' className='footer__link'>
                  Privacy Policy
                </a>
              </li>

              <li className='footer__item'>
                <a href='/' className='footer__link'>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='col-6'>
          <p className='footer__copyright'>
            Built by
            <a className='footer__link' href='/'>
              &nbsp; Hasan &nbsp;
            </a>
            With care. Copyright &copy; 2019. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Tenetur eum error dignissimos atque expedita accusantium officiis unde eos tempora animi?
            accusantium officiis unde eos tempora animi?
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
