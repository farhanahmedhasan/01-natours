import React from 'react';

import { useGlobalContext, handleChange, handleSubmit } from '../context';

import LazyLoad from 'react-lazyload';

const Booking = () => {
  const [state, dispatch] = useGlobalContext();

  return React.useMemo(() => {
    const handleAllFormChange = (e) => {
      handleChange(dispatch, e);
    };

    return (
      <LazyLoad>
        <div className='booking' id='section-booking'>
          <div className='row'>
            <div className='book'>
              <div className='book__form'>
                <form className='form' onSubmit={(e) => handleSubmit(dispatch, e)}>
                  <div className=' mb-mid'>
                    <h2 className='heading-secondary'>Start Booking Now</h2>
                  </div>

                  <div className='form__group'>
                    <input
                      type='text'
                      className='form__input'
                      id='fullName'
                      name='name'
                      placeholder='Full Name'
                      required
                      value={state.person.name}
                      onChange={handleAllFormChange}
                    />

                    <label htmlFor='fullName' className='form__label'>
                      Full Name
                    </label>
                  </div>

                  <div className='form__group'>
                    <input
                      type='email'
                      className='form__input'
                      id='email'
                      name='email'
                      placeholder='Email Address'
                      required
                      value={state.person.email}
                      onChange={handleAllFormChange}
                    />

                    <label htmlFor='email' className='form__label'>
                      Email Address
                    </label>
                  </div>

                  <div className='form__group mb-mid' required>
                    <div className='form__radioGroup'>
                      <input
                        type='radio'
                        className='form__radio'
                        id='small'
                        name='tourType'
                        value='Small Tour Group'
                        onChange={handleAllFormChange}
                      />

                      <label htmlFor='small'>
                        <span className='form__radioBtn'></span>
                        Small Tour Group
                      </label>
                    </div>

                    <div className='form__radioGroup'>
                      <input
                        type='radio'
                        className='form__radio'
                        id='Big'
                        name='tourType'
                        value='Big Tour Group'
                        onChange={handleAllFormChange}
                      />

                      <label htmlFor='Big'>
                        <span className='form__radioBtn'></span>
                        Big Tour Group
                      </label>
                    </div>
                  </div>

                  <div className='form__group'>
                    <button type='submit' className='btn btn--green'>
                      Next Step
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>
    );
  }, [state.person.email, state.person.name, dispatch]);
};

export default Booking;
