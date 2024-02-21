import { useEffect, useState } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie", "tea"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, []);

  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher
      url="desserts"
      render={(data) => <p>{data.length} desserts </p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher url="drinks" render={(data) => <p>{data.length} drinks </p>} />
  );
};

export default function RenderProps() {
    return (
        <div className="App">
        <header className="Header">Little Lemon Restaurant </header>
        <DessertsCount />
        <DrinksCount />
        </div>
    );
    }