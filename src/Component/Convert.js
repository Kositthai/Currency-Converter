import React, { useContext } from "react";
import Select from "react-select";
import { CurrencyContext } from "./CurrencyContext";

function Convert() {
  const {
    to,
    setTo,
    from,
    setFrom,
    amount,
    setAmount,
    exchangeRate,
    isLoading,
  } = useContext(CurrencyContext);

  const optionHandler = () => {
    const options = Object.keys(exchangeRate).map((key) => ({
      value: key,
      label: key,
    }));
    return options;
  };

  const calcurateExchangeRate = () => {
    const convertExchangeRate = exchangeRate[to];
    const result = (amount * convertExchangeRate).toFixed(6);
    return result;
  };

  const amountHandler = (e) => {
    if (e.target.value.length > 0) {
      const regex = /^[0-9]+$/;
      const isValid = regex.test(e.target.value); // using test method to return true or false
      isValid
        ? setAmount(e.target.value)
        : alert("Please enter a valid amount");
    } else {
      setAmount("");
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>
            <label>Amount</label>
            <input
              onChange={(e) => amountHandler(e)}
              value={amount}
              placeholder="Amount..."
            />
          </div>
          <div>
            <label>From</label>
            <Select
              options={optionHandler()}
              onChange={(e) => setFrom(e.value)}
              placeholder="Type to search..."
              value={{ value: from, label: from }}
            />
          </div>
          <div>
            <label>To</label>
            <Select
              options={optionHandler()}
              onChange={(e) => setTo(e.value)}
              placeholder="Type to search..."
              value={{ value: to, label: to }}
            />
          </div>

          <div>
            <p>{`${amount} ${from} =  ${calcurateExchangeRate()} ${to}`}</p>
            <p></p>
          </div>
        </div>
      )}
    </>
  );
}
export default Convert;
