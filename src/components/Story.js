import React from 'react';
import { useGlobalContext } from '../context';

const Story = ({ title, info, imgSrc, name, personIndex }) => {
  const [state] = useGlobalContext();

  return React.useMemo(() => {
    let position = 'nextSlide';

    if (state.index === personIndex) position = 'activeSlide';

    if ((state.index === 0 && personIndex === state.slide.length - 1) || personIndex === state.index - 1) {
      position = 'prevSlide';
    }

    return (
      <div className='story'>
        <div className={`slide ${position}`}>
          <figure className='story__shape'>
            <img className='story__img' src={imgSrc} alt='our Customer' />
            <figcaption className='story__caption'>{name}</figcaption>
          </figure>

          <div className='story__text'>
            <h3 className='heading-tertiary mb-small'>{title}</h3>
            <p className='paragraph'>{info}</p>
          </div>
        </div>
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.index]);
};

export default Story;
