import { useEffect, useState } from 'react';
import axios from 'axios';
import ConverterInput from './ConverterInput/ConveterInput';
import './ConverterSection.scss';

function ConverterSection() {
  const [isCurrencyRate, setIsCurrencyRate] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(1);
  const [isFromCurrencyAmount, setIsFromCurrencyAmount] = useState(true);
  const [exchangeRate, setExchangeRate] = useState(0);

  let toAmount, fromAmount;
  if (isFromCurrencyAmount) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  const currencyDataHandler = async () => {
    const { data } = await axios(
      'https://v6.exchangerate-api.com/v6/d39eb2f40a872eff29a952df/latest/USD'
    );
    const firstCurrency = Object.keys(data.conversion_rates)[77];
    setIsCurrencyRate(data.conversion_rates);
    setFromCurrency(data.base_code);
    setToCurrency(firstCurrency);
    setExchangeRate(data.conversion_rates.KRW);
  };

  useEffect(() => {
    currencyDataHandler();
  }, []);

  const handleFromAmountChange = (e: any) => {
    setAmount(e.target.value);
    setIsFromCurrencyAmount(true);
  };

  const handleToAmountChange = (e: any) => {
    setAmount(e.target.value);
    setIsFromCurrencyAmount(false);
  };

  return (
    <div className='converterSection'>
      <ConverterInput
        amount={fromAmount}
        codes={Object.keys(isCurrencyRate)}
        selectedCurrencyCode={fromCurrency}
        onChangeCurrencyCode={(e: any) => setFromCurrency(e.target.value)}
        onChangeCurrencyInput={handleFromAmountChange}
      />
      <ConverterInput
        amount={toAmount}
        codes={Object.keys(isCurrencyRate)}
        selectedCurrencyCode={toCurrency}
        onChangeCurrencyCode={(e: any) => setToCurrency(e.target.value)}
        onChangeCurrencyInput={handleToAmountChange}
      />
    </div>
  );
}

export default ConverterSection;
