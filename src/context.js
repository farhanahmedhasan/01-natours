import React, { useState, useContext, useEffect } from 'react';
import { sliderData } from './data/data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [slide, setSlide] = useState(sliderData);
  const [index, setIndex] = useState(0);

  const goNextSlide = () => {
    if (slide.length - 1 <= index) setIndex(0);
    else setIndex(index + 1);
  };

  const goPrevSlide = () => {
    if (index <= 0) setIndex(slide.length - 1);
    else setIndex(index - 1);
  };

  useEffect(() => {
    const slider = setInterval(() => {
      goNextSlide();
    }, 6000);
    return () => {
      clearInterval(slider);
    };
    // eslint-disable-next-line
  }, [index]);

  return (
    <AppContext.Provider value={{ slide, index, goNextSlide, goPrevSlide }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
