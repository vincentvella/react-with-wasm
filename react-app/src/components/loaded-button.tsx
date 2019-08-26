import React from 'react';
import { WasmGreeting } from "../types";

interface Loaded {
 wasm: WasmGreeting
}

const Loaded = ({ wasm }: Loaded) => <button onClick={() => wasm.greetPerson('person\'s name')}>Click me</button>;

export default Loaded;