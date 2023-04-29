import { useContext, useState } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import InvalidAmountInput from "./InvalidAmountInput";

import "../styles/CurrencyAmount.css";

export default function CurrencyAmount() {
  const { amount, setAmount } = useContext(CurrencyContext);
  const [isValidAmount, setIsValidAmount] = useState(true);

  const amountHandler = (e) => {
    if (e.target.value.length > 0) {
      const regex = /^[0-9]+$/;
      const isValid = regex.test(e.target.value);

      if (isValid) {
        setAmount(e.target.value);
        setIsValidAmount(true);
      } else {
        setIsValidAmount(false);
      }
    } else {
      setAmount("");
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="amount-input" className="Amount-Label">
          Amount
        </label>
        <input
          id="amount-input"
          className="Amount-Input"
          onChange={(e) => amountHandler(e)}
          value={amount}
          placeholder="Amount..."
        />
      </div>
      {!isValidAmount ? <InvalidAmountInput /> : null}
    </div>
  );
}
