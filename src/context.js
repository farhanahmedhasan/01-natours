import React, { useContext, useEffect, useReducer } from 'react';
import { sliderData } from './data/data';

const AppContext = React.createContext();

const initialState = {
  index: 0,
  slide: sliderData,
  isPopupOpen: false,
  person: { name: '', email: '', tourType: '' },
};

const reducer = (state, action) => {
  if (action.type === 'NEXT_SLIDE') {
    if (state.slide.length - 1 <= state.index) {
      return {
        ...state,
        index: 0,
      };
    } else {
      return {
        ...state,
        index: state.index + 1,
      };
    }
  }

  if (action.type === 'PREV_SLIDE') {
    if (state.index <= 0) {
      return {
        ...state,
        index: state.slide.length - 1,
      };
    } else {
      return {
        ...state,
        index: state.index - 1,
      };
    }
  }

  if (action.type === 'OPEN_POPUP') {
    return {
      ...state,
      isPopupOpen: true,
    };
  }

  if (action.type === 'CLOSE_POPUP') {
    return {
      ...state,
      isPopupOpen: false,
    };
  }

  if (action.type === 'FILLING_FORM') {
    const value = action.event.target.value;
    const name = action.event.target.name;
    const newPerson = { ...state.person, id: Date.now(), [name]: value };
    return {
      ...state,
      person: newPerson,
    };
  }

  if (action.type === 'SUBMIT_FORM') {
    return {
      ...state,
      person: { name: '', email: '', tourType: '' },
    };
  }

  throw new Error(`No matched action.type found in your reducer Funtion`);
};

const AppProvider = (children) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = [state, dispatch];

  useEffect(() => {
    const slider = setInterval(() => {
      dispatch({ type: 'NEXT_SLIDE' });
    }, 8000);
    return () => {
      clearInterval(slider);
    };
  }, []);

  return <AppContext.Provider value={value} {...children} />;
};

const useGlobalContext = () => {
  const newContext = useContext(AppContext);
  if (newContext === undefined) {
    throw new Error(`useGlobalContext must be used within a AppProvider`);
  }
  return newContext;
};

//Handling Slider
const goNextSlide = (dispatch) => dispatch({ type: 'NEXT_SLIDE' });
const goPrevSlide = (dispatch) => dispatch({ type: 'PREV_SLIDE' });

//Handling Popup
const openPopup = (dispatch) => dispatch({ type: 'OPEN_POPUP' });
const closePopupBtn = (dispatch) => dispatch({ type: 'CLOSE_POPUP' });

//Handling Form
const handleChange = (dispatch, event) => dispatch({ type: 'FILLING_FORM', event });

const handleSubmit = (dispatch, e) => {
  e.preventDefault();
  alert('We Got your info We will contact You soon');

  dispatch({ type: 'SUBMIT_FORM' });
};

export {
  AppProvider,
  useGlobalContext,
  goNextSlide,
  goPrevSlide,
  openPopup,
  closePopupBtn,
  handleChange,
  handleSubmit,
};
