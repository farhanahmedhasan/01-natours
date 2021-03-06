import React, { useContext, useReducer } from 'react';
import { reducer, initialState } from './redeucer';

const AppContext = React.createContext();

const AppProvider = (children) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = [state, dispatch];

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

export { AppProvider, useGlobalContext, goNextSlide, goPrevSlide, openPopup, closePopupBtn };
