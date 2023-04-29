import { createContext, useState, useEffect } from "react";
export const CurrencyContext = createContext();
const apiKey = process.env.REACT_APP_API_KEY;

export default function CurrencyProvider({ children }) {
  
  const [from, setFrom] = useState("DKK");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [fetchState, setFetchState] = useState({
    loading: false,
    response: [],
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setFetchState((previous) => ({ ...previous, loading: true }));
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`
        );
        const data = await response.json();
        setFetchState((previous) => ({
          ...previous,
          loading: false,
          response: data.conversion_rates,
        }));

        if (!response.ok) {
          throw new Error(JSON.stringify(data));
        }
      } catch (error) {
        console.log(error);
        setFetchState({ loading: false, response: [], error: error });
      }
    };
    fetchData();
  }, [from]);

  // create options dynamically base on currency from API
  const optionHandler = () => {
    const options = Object.keys(fetchState.response).map((key) => ({
      value: key,
      label: key,
    }));
    return options;
  };

  const curencyStates = {
    to,
    setTo,
    from,
    setFrom,
    amount,
    setAmount,
    setFetchState,
    fetchState,
    optionHandler,
  };

  return (
    <CurrencyContext.Provider value={curencyStates}>
      {children}
    </CurrencyContext.Provider>
  );
}
