import CurrencyAmount from "./component/CurrencyAmount";
import SelectCurrencyFrom from "./component/SelectCurrencyFrom";
import SelectCurrencyTo from "./component/SelectCurrencyTo";
import ConversionResult from "./component/ConversionResult";
import { CurrencyContext } from "./context/CurrencyContext";
import { useContext } from "react";
import "./styles/App.css";

function App() {
  const { fetchState } = useContext(CurrencyContext);

  if (fetchState.error) {
    return <p className="Error-Text">Something went wrong! Try again later</p>;
  }

  if (fetchState.loading) {
    return <i className="fas fa-spinner fa-spin"></i>;
  }

  return (
    <div className="App">
      <div className="App-Content-Wrapper">
        <h1>Currency Converter</h1>
        <div className="App-Contents">
          <div className="Currency-Form">
            <CurrencyAmount />
            <SelectCurrencyFrom />
            <SelectCurrencyTo />
          </div>
          <ConversionResult />
        </div>
      </div>
    </div>
  );
}

export default App;
