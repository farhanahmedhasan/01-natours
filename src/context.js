import React, { useState, useContext, useEffect } from 'react';
import { sliderData } from './data/data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  //States For Slide
  // eslint-disable-next-line
  const [slide, setSlide] = useState(sliderData);
  const [index, setIndex] = useState(0);

  //State for form
  const [person, setPerson] = useState({ name: '', email: '', tourType: '' });

  //State for popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  //Handling Slider
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

  //handling form
  const handleSubmit = (e) => {
    e.preventDefault();
    setPerson({ name: '', email: '', tourType: '' });
    alert('We Got your info We will contact You soon');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newPerson = { ...person, id: Date.now(), [name]: value };
    setPerson(newPerson);
  };

  return (
    <AppContext.Provider
      value={{
        slide,
        index,
        goNextSlide,
        goPrevSlide,
        handleSubmit,
        handleChange,
        person,
        isPopupOpen,
        setIsPopupOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
