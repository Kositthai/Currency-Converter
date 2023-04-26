import { createContext, useState, useEffect } from "react";
export const CurrencyContext = createContext();

export default function CurrencyProvider({ children }) {
  const [to, setTo] = useState("EUR");
  const [from, setFrom] = useState("DKK");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsEror] = useState();

  // get all data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/ae587b0565b1833a078ba9c9/latest/${from}`
        );
        const data = await response.json();
        setExchangeRate(data.conversion_rates);
        setIsLoading(false);
        if (!response.ok) {
          throw new Error(JSON.stringify(data));
        }
      } catch (error) {
        console.log(error);
        alert("something went wrong in internal operation, Try again later");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [from, to]);

  const curencyStates = {
    to,
    setTo,
    from,
    setFrom,
    amount,
    setAmount,
    exchangeRate,
    isLoading,
  };

  return (
    <CurrencyContext.Provider value={curencyStates}>
      {children}
    </CurrencyContext.Provider>
  );
}
