export type WasmGreeting = {
  default: any;
  greetPerson(arg0: string): void;
};

export type WasmFunction<T extends keyof WasmGreeting> = WasmGreeting[T];
