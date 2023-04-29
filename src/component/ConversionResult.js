import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import "../styles/ConversionResult.css"; 

export default function ConversionResult() {
  const { to, from, amount, fetchState } = useContext(CurrencyContext);
  const convertExchangeRate = fetchState.response[to];

  const conversionRate = (amount * convertExchangeRate).toFixed(4)
  const reverseConversionRate = (1/ convertExchangeRate).toFixed(4)

  return (
    <div className="ConversionResult">
      <p>{`${amount} ${from} =  ${conversionRate} ${to}`}</p>
      <p>{`1  ${to} = ${reverseConversionRate} ${from}`}</p>
    </div>
  );
}
