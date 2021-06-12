import React from 'react';
import { useGlobalContext } from '../context';

const Story = ({ title, info, imgSrc, name, personIndex }) => {
  const { index, slide } = useGlobalContext();

  let position = 'nextSlide';

  if (index === personIndex) position = 'activeSlide';

  if ((index === 0 && personIndex === slide.length - 1) || personIndex === index - 1) {
    position = 'prevSlide';
  }

  return (
    <div className='story'>
      <div className={`slide ${position}`}>
        <figure className='story__shape'>
          <img className='story__img' src={imgSrc} alt='photo of our Customer' />
          <figcaption className='story__caption'>{name}</figcaption>
        </figure>

        <div className='story__text'>
          <h3 className='heading-tertiary mb-small'>{title}</h3>
          <p className='paragraph'>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
