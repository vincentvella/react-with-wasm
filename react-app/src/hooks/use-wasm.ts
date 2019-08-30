import { useEffect, useState } from "react";

import { WasmModule } from "../types";

function useWasm() {
  const [loading, setLoading] = useState(false);
  const [wasm, setWasm] = useState<WasmModule>();

  async function loadWASM() {
    try {
      setLoading(true);
      const wasm = await import("wasm-lib");
      setWasm(wasm);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadWASM();
  }, []);
  return [wasm, loading];
}

export default useWasm;
