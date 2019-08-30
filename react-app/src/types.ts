export type WasmModule = {
  default: any;
  fibonacci(arg0: BigInt): BigInt;
};

export type WasmFunction<T extends keyof WasmModule> = WasmModule[T];
