import React from "react";

function RandomUser() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1").then((response) => {
      response.json().then((data) => {
        setUser(data.results[0]);
      });
    });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{ padding: "40px" }}>
      <h1>Customer data</h1>
      <h2>Title: {user.name.title}</h2>
      <h2>First name: {user.name.first}</h2>
      <h2>Last name: {user.name.last}</h2>
        <img src={user.picture.large} alt="user" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default RandomUser;
