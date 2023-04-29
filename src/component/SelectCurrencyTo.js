import Select from "react-select";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import "../styles/SelectCurrencyFrom.css";
import "../styles/SelectCurrencyTo.css";

export default function SelectCurrencyTo() {
  const { to, setTo, optionHandler } = useContext(CurrencyContext);

  return (
    <div className="SelectCurrencyTo">
      <label htmlFor="select-currency-to" className="To-Label">
        To
      </label>
      <div className="To-Selector">
        <Select
          id="select-currency-to"
          options={optionHandler()}
          onChange={(e) => setTo(e.value)}
          placeholder="Type to search..."
          value={{ value: to, label: to }}
        />
      </div>
    </div>
  );
}
