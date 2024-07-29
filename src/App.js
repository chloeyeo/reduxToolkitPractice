import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slice/numberSlice";

function App() {
  const age = useSelector((state) => state.numberSlice.age);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>age: {age}</p>
        <button
          onClick={() => {
            dispatch(increment(1));
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            dispatch(decrement(1));
          }}
        >
          -1
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
