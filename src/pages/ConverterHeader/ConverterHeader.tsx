import React from 'react';
import './ConverterHeader.scss';

const ConverterHeader = () => {
  return (
    <div className='converterHeader'>
      <img
        alt='Currency Exchange Icon'
        src='https://cdn-icons-png.flaticon.com/512/896/896967.png'
        className='converterHeaderIcon'
      />
      <h1 className='converterHeaderTitle'>Currency Converter</h1>
      <h2 className='converterHeaderSubtitle'>
        An application which converts amounts from one currency to the other.
      </h2>
    </div>
  );
};

export default ConverterHeader;
