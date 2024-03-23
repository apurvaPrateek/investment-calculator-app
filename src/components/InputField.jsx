export default function InputField({ label, id, onChange, inputValue }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        id={id}
        value={inputValue}
        onChange={onChange}
        required
      />
    </div>
  );
}
