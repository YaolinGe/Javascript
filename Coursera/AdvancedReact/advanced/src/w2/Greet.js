import { useState } from "react";

export default function Greet() {
  const [greeting, setGreeting] = useState({ greet: "Hello", place: "World!" });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    setGreeting(
        prevGreet => {
            return {
                ...prevGreet,
                greet: "Howdy"
            }
        }
    )
  }

  return (
    <div>
      <h1>{greeting.greet} {greeting.place}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}
