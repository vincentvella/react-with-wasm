import React, { useState, useEffect } from 'react';
import './App.css';

type WasmGreeting = {
  default: any;
  greetPerson(arg0: string): void;
}

interface Loaded {
 wasm: WasmGreeting
}

const Loaded = ({ wasm }: Loaded) => <button onClick={() => wasm.greetPerson('person\'s name')}>Click me</button>;

interface Unloaded {
  loading: boolean;
}

const Unloaded = ({ loading }: Unloaded) => {
 return loading ? <div>Loading...</div> : null
};

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
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {wasm ? (
          <Loaded wasm={wasm} />
        ) : (
          <Unloaded loading={loading} />
        )}
      </header>
    </div>
  );
};

export default App;