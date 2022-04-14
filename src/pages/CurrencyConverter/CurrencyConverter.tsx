import React from 'react';
import ConverterHeader from '../ConverterHeader/ConverterHeader';
import ConverterSection from '../ConverterSection/ConverterSection';
import './CurrencyConverter.scss';

const CurrencyConverter = () => {
  return (
    <main className='currencyConverter'>
      <div className='currencyConverterContainer'>
        <ConverterHeader />
        <ConverterSection />
      </div>
    </main>
  );
};

export default CurrencyConverter;
