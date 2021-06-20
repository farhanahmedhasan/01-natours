import React from 'react';
import { useGlobalContext } from '../context';

const Booking = () => {
  const { handleChange, handleSubmit, person } = useGlobalContext();

  return (
    <div className='booking'>
      <div className='row'>
        <div className='book'>
          <div className='book__form'>
            <form className='form' onSubmit={handleSubmit}>
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
                  value={person.name}
                  onChange={handleChange}
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
                  value={person.email}
                  onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
  );
};

export default Booking;
