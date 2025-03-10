import React from "react";

export function Fetch() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data Returned</h1>
      <h2>First name: {user.results[0].name.first}</h2>
      <h2>Last name: {user.results[0].name.last}</h2>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}
