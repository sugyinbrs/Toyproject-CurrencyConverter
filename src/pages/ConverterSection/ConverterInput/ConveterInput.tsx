import React from 'react';
import './ConverterInput.scss';

const ConverterInput = () => {
  return (
    <section className='converterInput'>
      <select name='Currency Codes'>
        <option value='USD'>USD</option>
        <option value='KRW'>JPY</option>
        <option value='KRW'>GBP</option>
        <option value='KRW'>KRW</option>
      </select>
      <input type='number' name='amount' placeholder='1' />
    </section>
  );
};

export default ConverterInput;
