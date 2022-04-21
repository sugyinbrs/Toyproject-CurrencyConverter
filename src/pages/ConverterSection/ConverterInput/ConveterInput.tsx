import './ConverterInput.scss';

function ConverterInput(props: any) {
  const { codes, selectedCurrencyCode, onChangeCurrencyCode } = props;

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
      <input type='number' name='amount' />
    </section>
  );
}

export default ConverterInput;
