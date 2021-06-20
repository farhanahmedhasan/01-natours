import React from 'react';

const Booking = () => {
  return (
    <div className='booking'>
      <div className='row'>
        <div className='book'>
          <div className='book__form'>
            <form className='form'>
              <div className=' mb-mid'>
                <h2 className='heading-secondary'>Start Booking Now</h2>
              </div>

              <div className='form__group'>
                <input type='text' className='form__input' id='fullName' placeholder='Full Name' required />
                <label htmlFor='fullName' className='form__label'>
                  Full Name
                </label>
              </div>

              <div className='form__group'>
                <input type='email' className='form__input' id='email' placeholder='Email Address' required />
                <label htmlFor='email' className='form__label'>
                  Email Address
                </label>
              </div>

              <div className='form__group mb-mid'>
                <div className='form__radioGroup'>
                  <input type='radio' className='form__radio' id='small' name='size' />
                  <label htmlFor='small'>
                    <span className='form__radioBtn'></span>
                    Small Tour Group
                  </label>
                </div>

                <div className='form__radioGroup'>
                  <input type='radio' className='form__radio' id='Big' name='size' />
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
