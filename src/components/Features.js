import React from 'react';
import { featureData } from '../data/data';
const Features = () => {
  return (
    <section className='features'>
      {/* <i>
        <AiOutlineGlobal />
      </i> */}
      <div className='row'>
        {featureData.map((feature) => {
          const { id, icon, title, info } = feature;
          return (
            <div key={id} className='col-3'>
              <div className='feature-box center-text'>
                <i className='feature-box__icon'>{icon}</i>
                <h3 className='heading-tertiary mb-small'>{title}</h3>
                <p className='feature-box__text paragraph'>{info}</p>
              </div>
            </div>
          );
        })}
      </div>

      <svg width='0' height='0'>
        <linearGradient id='blue-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='#55c57a' offset='50%' />
          <stop stopColor='#28b485' offset='100%' />
        </linearGradient>
      </svg>
    </section>
  );
};

export default Features;
