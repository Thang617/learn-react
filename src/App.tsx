import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import FirstComponent, { Thum } from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import CardComponent from "./components/CardComponent";
import { Card } from "./components/Card";
import TodoApp from "./components/TodoApp";
import TodoApp2 from "./components/TodoApp2";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [check, setCheck] = useState(false);

  return (
    <>
      <TodoApp2 />
      <TodoApp />
      {/* <Card>
        <SecondComponent onChange={setName} />
      </Card>
      <CardComponent name={name} role="admin" verified={check} />
      <input
        type="checkbox"
        onChange={(event) => {
          setCheck(event.target.checked);
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count ({count})
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount(count * 2);
        }}
      >
        X2
      </button> */}
    </>
  );
}

export default App;
