import { useContext } from "react";
import Select from "react-select";
import { CurrencyContext } from "../context/CurrencyContext";

export default function SelectCurrencyFrom() {
  const { from, setFrom, optionHandler } = useContext(CurrencyContext);

  return (
    <div className="SelectCurrencyFrom">
      <label htmlFor="select-currency-from" className="From-Label">
        From
      </label>
      <div className="From-Selector">
        <Select
          id="select-currency-from"
          options={optionHandler()}
          onChange={(e) => setFrom(e.value)}
          placeholder="Type to search..."
          value={{ value: from, label: from }}
        />
      </div>
    </div>
  );
}
