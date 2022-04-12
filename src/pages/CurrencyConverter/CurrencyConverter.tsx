import React from 'react';
import ConverterHeader from '../ConverterHeader/ConverterHeader';
import './CurrencyConverter.scss';

const CurrencyConverter = () => {
  return (
    <main className='currencyConverter'>
      <div className='currencyConverterContainer'>
        <ConverterHeader />
      </div>
    </main>
  );
};

export default CurrencyConverter;
