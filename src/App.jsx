import "./App.css";
import Counter from "./Counter";
import User from "./user";
import Team from "./Team";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  const addNum = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h2>React Core Concept 2</h2>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addNum(7)}>Add Nnm</button>
    </>
  );
}

export default App;
