import { useContext } from "react";
import Select from "react-select";
import { CurrencyContext } from "./CurrencyContext";


function CurrencySelector() {
  const { to, setTo, from, setFrom, amount, fetchState, setAmount} = useContext(CurrencyContext);

  const optionHandler = () => {
    const options = Object.keys(fetchState.response).map((key) => ({
      value: key,
      label: key,
    }));
    return options;
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
    <div style={{display: "flex"}}>
      <div style={{display: "flex"}}>
        <label>Amount</label>
        <input
          onChange={(e) => amountHandler(e)}
          value={amount}
          placeholder="Amount..."
        />
      </div>
      <div style={{display: "flex"}}>
        <label>From</label>
        <div style={{width: "12em"}}>
        <Select 
          options={optionHandler()}
          onChange={(e) => setFrom(e.value)}
          placeholder="Type to search..."
          value={{ value: from, label: from }}
        />
        </div>
      </div>
      <div style={{display: "flex"}}>
        <label>To</label>
        <div style={{width: "12em"}}>
        <Select
          options={optionHandler()}
          onChange={(e) => setTo(e.value)}
          placeholder="Type to search..."
          value={{ value: to, label: to }}
        />
        </div>
      </div>
    </div>
  );
}

export default CurrencySelector; 