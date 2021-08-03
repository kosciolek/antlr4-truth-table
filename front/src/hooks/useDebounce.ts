import {useEffect, useState} from "react";

export const useDebounce = <T>(val: T, ms: number) => {
  const [state, setState] = useState(val);

  useEffect(() => {
    const timeout = setTimeout(() => setState(val), ms);
    return () => clearTimeout(timeout);
  }, [val, ms]);

  return state;
}
