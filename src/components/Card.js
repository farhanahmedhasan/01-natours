import React from 'react';

const Card = ({ classM, classM2, classM3, header, details, price }) => {
  return (
    <div className='col-4'>
      <div className='card'>
        <div className='card__side card__side--front'>
          <div className={`card__picture ${classM2}`}></div>

          <h4 className='card__header'>
            <span className={`card__header--span ${classM3}`}>{header}</span>
          </h4>

          <div className='card__details'>
            <ul>
              {details.map((info, index) => {
                return <li key={index}>{info}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className={`card__side card__side--back ${classM}`}>
          <div className='card__cta'>
            <div className='card__price-box'>
              <p className='card__price-only'>Only</p>
              <p className='card__price-value'>${price}</p>
            </div>
            <a href='/f' className='btn btn--white'>
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
