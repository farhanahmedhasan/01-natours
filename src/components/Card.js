import React from 'react';

import { useGlobalContext } from '../context';
import { openPopup } from '../context';

import LazyLoad from 'react-lazyload';

const Card = ({ classM, classM2, classM3, header, details, price }) => {
  const [, dispatch] = useGlobalContext();

  return React.useMemo(() => {
    return (
      <div className='col-4'>
        <div className='card'>
          <div className='card__side card__side--front'>
            <LazyLoad>
              <div className={`card__picture ${classM2}`}></div>
            </LazyLoad>

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
              <a
                href='/f'
                className='btn btn--white btn--card'
                onClick={(e) => {
                  e.preventDefault();
                  openPopup(dispatch);
                }}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default Card;
