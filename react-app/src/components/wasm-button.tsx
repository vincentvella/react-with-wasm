import { WasmFunction, WasmModule } from "../types";

import React from "react";
import useWasm from "../hooks/use-wasm";

interface WasmButtonProps<T extends keyof WasmModule> {
  handleClick: WasmFunction<T>;
}

function WasmButton<T extends keyof WasmModule>(props: WasmButtonProps<T>) {
  const [wasm, loading] = useWasm();
  const { handleClick } = props;
  if (!wasm) return null;
  if (loading) return <button disabled>Loading...</button>;
  return <button onClick={() => handleClick(wasm)}>Click me</button>;
}

export default WasmButton;
