import React, { useState, useEffect } from 'react';
import { WasmGreeting } from './types';
import Components from './components';
import './App.css';

const { LoadedButton, UnloadedButton } = Components;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [wasm, setWasm] = useState<WasmGreeting>();
  useEffect(() => {
    loadWASM();
  }, []);

  async function loadWASM() {
    try {
      setLoading(true);
      const wasm = await import('wasm-lib');
      setWasm(wasm);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {wasm ? (
          <LoadedButton wasm={wasm} />
        ) : (
          <UnloadedButton loading={loading} />
        )}
      </header>
    </div>
  );
};

export default App;
