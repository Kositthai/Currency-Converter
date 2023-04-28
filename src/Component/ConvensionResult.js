import { useContext } from "react";
import { CurrencyContext } from "./CurrencyContext";

function ConversionResult() {
    const { to, from,  amount, fetchState} = useContext(CurrencyContext);

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

export default ConversionResult;
