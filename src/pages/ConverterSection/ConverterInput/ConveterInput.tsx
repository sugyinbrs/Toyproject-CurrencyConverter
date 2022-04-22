import './ConverterInput.scss';

function ConverterInput(props: any) {
  const {
    amount,
    codes,
    selectedCurrencyCode,
    onChangeCurrencyCode,
    onChangeCurrencyInput,
  } = props;

  return (
    <section className='converterInput'>
      <select
        name='Currency Codes'
        value={selectedCurrencyCode}
        onChange={onChangeCurrencyCode}
      >
        {codes.map((code: string) => (
          <option key={code}>{code}</option>
        ))}
      </select>
      <input
        type='number'
        name='amount'
        value={amount}
        onChange={onChangeCurrencyInput}
      />
    </section>
  );
}

export default ConverterInput;
