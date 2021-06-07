import React from 'react';
import compositionP1 from '../img/nat-1-large.jpg';
import compositionP2 from '../img/nat-2-large.jpg';
import compositionP3 from '../img/nat-3-large.jpg';

const About = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className='about'>
      <div className='center-text mb-big'>
        <h2 className='heading-secondary'>Exiting tours for adventurous people</h2>
      </div>

      <div className='row'>
        <div className='col-6'>
          <h3 className='heading-tertiary mb-small'>You're going to fall in love with nature</h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non quidem blanditiis dolor
            veniam cupiditate natus sapiente quas. Quasi ratione cupiditate corporis neque non quidem
            blanditiis dolor
          </p>

          <h3 className='heading-tertiary mb-small'>Live adventures like you never had before</h3>
          <p className='paragraph'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, saepe! Aspernatur ipsa, sunt
            adipisci cum ut asperiores aliquam
          </p>

          <a href='#' className='btn btn--text' onClick={handleClick}>
            Learn More &rarr;
          </a>
        </div>

        <div className='col-6'>
          <div className='composition'>
            <img src={compositionP1} alt='photo1' className='composition__photo composition__photo--1' />
            <img src={compositionP2} alt='photo2' className='composition__photo composition__photo--2' />
            <img src={compositionP3} alt='photo3' className='composition__photo composition__photo--3' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
