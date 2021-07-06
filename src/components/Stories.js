import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Story from './Story';

import { useGlobalContext } from '../context';
import { goNextSlide } from '../context';
import { goPrevSlide } from '../context';

import video1 from '../videos/video.mp4';
import video2 from '../videos/video.webm';

const Stories = () => {
  const [state, dispatch] = useGlobalContext();

  return React.useMemo(() => {
    return (
      <section className='stories' id='section-stories'>
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
            {state.slide.map((data, personIndex) => {
              const { id } = data;
              return <Story key={id} {...data} personIndex={personIndex} />;
            })}
          </div>

          <button className='btnPrev' onClick={() => goPrevSlide(dispatch)}>
            <FiChevronLeft />
          </button>
          <button className='btnNext' onClick={() => goNextSlide(dispatch)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.slide]);
};

export default Stories;
