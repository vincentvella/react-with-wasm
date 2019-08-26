import React, { useState, useEffect } from 'react';
import { WasmGreeting } from './types';
import Functions from './functions';
import './App.css';
import { WasmButton } from './components';

const { Alert } = Functions;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [wasm, setWasm] = useState<WasmGreeting>();

  async function loadWASM() {
    try {
      setLoading(true);
      const wasm = await import('wasm-lib');
      setWasm(wasm);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadWASM();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <WasmButton<'greetPerson'>
          wasm={wasm}
          loading={loading}
          handleClick={() => wasm.greetPerson("person's name")}
        />
        <button onClick={Alert}>Click Me</button>
      </header>
    </div>
  );
};

export default App;
