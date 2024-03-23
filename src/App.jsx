import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12,
  });
  const [resultValues, setResultValues] = useState(calculateInvestmentResults(inputValues));

  function handleChange(event) {
    const inputVal = event.target.value;
    const fieldId = event.target.id;

    let currValues = { ...inputValues, [fieldId]: +event.target.value };

    let answer = calculateInvestmentResults(currValues);

    setInputValues((prevValues) => ({
      ...prevValues,
      [fieldId]: event.target.value,
    }));

    setResultValues(answer);
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} inputValues={inputValues}/>
      <Result resultValues={resultValues} />
    </>
  );
}

export default App;
