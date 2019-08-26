import React from 'react';
import { WasmGreeting, WasmFunction } from '../types';

interface WasmButtonProps<T extends keyof WasmGreeting> {
  wasm: WasmGreeting;
  loading: boolean;
  handleClick: WasmFunction<T>;
}

function WasmButton<T extends keyof WasmGreeting>(props: WasmButtonProps<T>) {
  const { wasm, loading, handleClick } = props;
  if (!wasm) return null;
  if (loading) return <button disabled>Loading...</button>;
  return <button onClick={() => handleClick()}>Click me</button>;
}

export default WasmButton;
