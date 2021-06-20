import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Story from './Story';
import { useGlobalContext } from '../context';

import video1 from '../videos/video.mp4';
import video2 from '../videos/video.webm';

const Stories = () => {
  const { slide, goNextSlide, goPrevSlide } = useGlobalContext();
  // console.log('container re-render');

  return (
    <section className='stories'>
      <div className='bgVideo'>
        <video className='bgVideo__content' autoPlay loop muted>
          <source src={video1} />
          <source src={video2} />
          Your Browser Doesn't support The Video
        </video>
      </div>

      <div className='slider'>
        <div className='center-text mb-big'>
          <h2 className='heading-secondary'>We make people genuinely happy</h2>
        </div>
        <div className='row'>
          {slide.map((data, personIndex) => {
            const { id } = data;
            return <Story key={id} {...data} personIndex={personIndex} />;
          })}
        </div>

        <button className='btnPrev' onClick={goPrevSlide}>
          <FiChevronLeft />
        </button>
        <button className='btnNext' onClick={goNextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Stories;