import React from 'react';
import ConverterInput from './ConverterInput/ConveterInput';
import './ConverterSection.scss';

const ConverterSection = () => {
  return (
    <div className='converterSection'>
      <ConverterInput />
      <ConverterInput />
    </div>
  );
};

export default ConverterSection;
