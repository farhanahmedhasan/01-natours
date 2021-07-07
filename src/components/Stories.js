import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Story from './Story';

import { useGlobalContext } from '../context';
import { goNextSlide } from '../context';
import { goPrevSlide } from '../context';

const Stories = () => {
  const [state, dispatch] = useGlobalContext();
  const LoadVideo = React.lazy(() => import(/* webpackPrefetch: true */ './LoadVideo'));

  return React.useMemo(() => {
    return (
      <section className='stories' id='section-stories'>
        <React.Suspense
          fallback={<div style={{ visibility: 'hidden', backgroundColor: '#fff' }}>'YO m loading</div>}
        >
          <LoadVideo />
        </React.Suspense>

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
