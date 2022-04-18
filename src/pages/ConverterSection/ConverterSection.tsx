import { useEffect, useState } from 'react';
import axios from 'axios';
import ConverterInput from './ConverterInput/ConveterInput';
import './ConverterSection.scss';

function ConverterSection() {
  const [isCurrencyCode, setIsCurrencyCode] = useState([]);

  const currencyCodeHandler = async () => {
    const { data } = await axios(
      'https://v6.exchangerate-api.com/v6/d39eb2f40a872eff29a952df/latest/USD'
    );
    setIsCurrencyCode(data.conversion_rates);
  };

  useEffect(() => {
    currencyCodeHandler();
  }, []);

  return (
    <div className='converterSection'>
      <ConverterInput
        codes={Object.keys(isCurrencyCode)}
        currencies={isCurrencyCode}
      />
      <ConverterInput
        codes={Object.keys(isCurrencyCode)}
        currencies={isCurrencyCode}
      />
    </div>
  );
}

export default ConverterSection;
