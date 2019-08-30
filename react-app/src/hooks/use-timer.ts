import { useState } from "react";

const useTimer: (func: any) => [(wasm: any) => void, number | null] = (
  func: any
) => {
  const [start, setStart] = useState<Date>();
  const [end, setEnd] = useState<Date>();

  const execute = (wasm: any) => {
    setStart(new Date());
    func(wasm);
    setEnd(new Date());
  };

  if (!start || !end) return [execute, null];
  const runtime = end.getUTCMilliseconds() - start.getUTCMilliseconds();
  return [execute, runtime];
};

export default useTimer;
