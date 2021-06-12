import React from 'react';
import Card from './Card';
import { toursCard } from '../data/data';

const Tours = () => {
  return (
    <section id='section-tours' className='tours'>
      <div className='center-text mb-big'>
        <h2 className='heading-secondary'>Most Popular Tours</h2>
      </div>
      <div className='row'>
        {toursCard.map((card) => {
          const { id } = card;
          return <Card key={id} {...card} />;
        })}
      </div>

      <div className='center-text'>
        <a href='/a' className='btn btn--green'>
          Discover All Tours
        </a>
      </div>
    </section>
  );
};

export default Tours;
