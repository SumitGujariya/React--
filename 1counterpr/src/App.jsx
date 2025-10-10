import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //Keeps track of counter value
  //Updates counter and re-renders the UI
  let [counter, setCounter] = useState(15);

  // let counter = 15

  const Increasevalue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("Clicked", counter);
  };
  const Decreasevalue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log("Clicked", counter);
  };

  return (
    <>
      <h1>sumit gujariya</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={Increasevalue}>Increasing value {counter}</button>
      <br />
      <br />
      <button onClick={Decreasevalue}>Decreasing value {counter}</button>
      <p>Footer:- {counter}</p>
    </>
  );
}

export default App;
