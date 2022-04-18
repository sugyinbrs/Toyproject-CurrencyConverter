import './ConverterInput.scss';

function ConverterInput(props: any) {
  const { codes } = props;

  return (
    <section className='converterInput'>
      <select name='Currency Codes'>
        {codes.map((code: string) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
      <input type='number' name='amount' placeholder='1' />
    </section>
  );
}

export default ConverterInput;
