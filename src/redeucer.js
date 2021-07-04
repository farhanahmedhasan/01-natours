import { sliderData } from './data/data';

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

export { reducer, initialState };
