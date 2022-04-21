import { useEffect, useState } from 'react';
import axios from 'axios';
import ConverterInput from './ConverterInput/ConveterInput';
import './ConverterSection.scss';

function ConverterSection() {
  const [isCurrencyRate, setIsCurrencyRate] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');

  const currencyDataHandler = async () => {
    const { data } = await axios(
      'https://v6.exchangerate-api.com/v6/d39eb2f40a872eff29a952df/latest/USD'
    );
    const firstCurrency = Object.keys(data.conversion_rates)[77];
    setIsCurrencyRate(data.conversion_rates);
    setFromCurrency(data.base_code);
    setToCurrency(firstCurrency);
  };

  useEffect(() => {
    currencyDataHandler();
  }, []);

  return (
    <div className='converterSection'>
      <ConverterInput
        codes={Object.keys(isCurrencyRate)}
        selectedCurrencyCode={fromCurrency}
        onChangeCurrencyCode={(e: any) => setFromCurrency(e.target.value)}
      />
      <ConverterInput
        codes={Object.keys(isCurrencyRate)}
        selectedCurrencyCode={toCurrency}
        onChangeCurrencyCode={(e: any) => setToCurrency(e.target.value)}
      />
    </div>
  );
}

export default ConverterSection;
