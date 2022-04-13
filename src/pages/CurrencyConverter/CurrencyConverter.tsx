import React from 'react';
import ConverterHeader from '../ConverterHeader/ConverterHeader';
import ConverterInput from '../ConverterInput/ConverterInput';
import './CurrencyConverter.scss';

const CurrencyConverter = () => {
  return (
    <main className='currencyConverter'>
      <div className='currencyConverterContainer'>
        <ConverterHeader />
        <ConverterInput />
      </div>
    </main>
  );
};

export default CurrencyConverter;
