import InputField from "./InputField";

export default function UserInput({ onChange, inputValues }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <InputField
          label="Initial Investment"
          id="initialInvestment"
          onChange={onChange}
          inputValue={inputValues.initialInvestment}
        />
        <InputField
          label="Annual Investment"
          id="annualInvestment"
          onChange={onChange}
          inputValue={inputValues.annualInvestment}
        />
      </div>
      <div className="input-group">
        <InputField
          label="Expected Return"
          id="expectedReturn"
          onChange={onChange}
          inputValue={inputValues.expectedReturn}
        />
        <InputField
          label="Duration"
          id="duration"
          onChange={onChange}
          inputValue={inputValues.duration}
        />
      </div>
    </div>
  );
}
