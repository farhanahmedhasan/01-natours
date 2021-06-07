import React from 'react';

const GridTest = () => {
  return (
    <section className='grid-test'>
      <div className='row'>
        <div className='col-6'>Col-6</div>
        <div className='col-6'>Col-6</div>
      </div>

      <div className='row'>
        <div className='col-4'>Col-4</div>
        <div className='col-4'>Col-4</div>
        <div className='col-4'>Col-4</div>
      </div>

      <div className='row'>
        <div className='col-4'>Col-4</div>
        <div className='col-8'>Col-8</div>
      </div>

      <div className='row'>
        <div className='col-3'>Col-3</div>
        <div className='col-3'>Col-3</div>
        <div className='col-3'>Col-3</div>
        <div className='col-3'>Col-3</div>
      </div>

      <div className='row'>
        <div className='col-3'>Col-3</div>
        <div className='col-3'>Col-3</div>
        <div className='col-6'>Col-6</div>
      </div>

      <div className='row'>
        <div className='col-3'>Col-3</div>
        <div className='col-9'>Col-9</div>
      </div>

      <div className='row'>
        <div className='col-2'>Col-2</div>
        <div className='col-2'>Col-2</div>
        <div className='col-2'>Col-2</div>
        <div className='col-2'>Col-2</div>
        <div className='col-2'>Col-2</div>
        <div className='col-2'>Col-2</div>
      </div>

      <div className='row'>
        <div className='col-2'>Col-2</div>
        <div className='col-3'>Col-3</div>
        <div className='col-6'>Col-6</div>
        <div className='col-1'>Col-1</div>
      </div>
    </section>
  );
};

export default GridTest;
