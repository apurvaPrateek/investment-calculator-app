import { formatter } from "../util/investment";

export default function Result({ resultValues }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultValues &&
          resultValues.map((row, idx) => {
            return (
              <tr key={idx}>
                <th>{row.year}</th>
                <th>{formatter.format(row.valueEndOfYear)}</th>
                <th>{formatter.format(row.interest)}</th>
                <th>{formatter.format(row.totalInterest)}</th>
                <th>{formatter.format(row.annualInvestment)}</th>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
