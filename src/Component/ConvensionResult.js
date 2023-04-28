import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

export default function ConversionResult() {
  const { to, from, amount, fetchState } = useContext(CurrencyContext);

  const calcurateExchangeRate = () => {
    const convertExchangeRate = fetchState.response[to];
    const result = (amount * convertExchangeRate).toFixed(6);
    return result;
  };

  return (
    <div>
      <p>{`${amount} ${from} =  ${calcurateExchangeRate()} ${to}`}</p>
      <p></p>
    </div>
  );
}
