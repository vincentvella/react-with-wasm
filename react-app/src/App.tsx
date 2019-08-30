import "./App.css";

import Functions from "./functions";
import React from "react";
import { WasmButton } from "./components";
import { WasmModule } from "./types";
import useTimer from "./hooks/use-timer";

const { Fibonacci } = Functions;

const App: React.FC = () => {
  const rustFibonacci = (wasm: WasmModule) => wasm.fibonacci(BigInt(35));
  const jsFibonacci = (num: number) => Fibonacci(num);
  const [rustFibonacciExecute, rustFibonacciRuntime] = useTimer(rustFibonacci);
  const [fibonacciExecute, fibonacciRuntime] = useTimer(jsFibonacci);
  return (
    <div className="container">
      <div className="actionContainer">
        <div className="row">
          <div>Rust</div>
          <div>Javascript</div>
        </div>
        <hr />
        <div>Fibonacci Example (35)</div>
        <div className="row">
          <WasmButton handleClick={rustFibonacciExecute} />
          <button onClick={() => fibonacciExecute(35)}>Click Me</button>
        </div>
        <div className="row">
          <div>{rustFibonacciRuntime && `${rustFibonacciRuntime} ms`}</div>
          <div>{fibonacciRuntime && `${fibonacciRuntime} ms`}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
