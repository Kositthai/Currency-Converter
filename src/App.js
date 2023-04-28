import CurrencyAmount from "./component/CurrencyAmount";
import SelectCurrencyFrom from "./component/SelectCurrencyFrom";
import SelectCurrencyTo from "./component/SelectCurrencyTo";
import ConversionResult from "./component/ConvensionResult";

function App() {
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyAmount />
      <SelectCurrencyFrom />
      <SelectCurrencyTo />
      <ConversionResult />
    </div>
  );
}

export default App;
