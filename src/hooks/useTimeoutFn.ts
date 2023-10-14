import { useCallback, useEffect, useRef } from 'react';

type TimeoutFn = () => void;

const useTimeoutFn = (fn: TimeoutFn, delay: number): [() => void] => {
  const timeoutId = useRef<number | undefined>(undefined);
  const callback = useRef<TimeoutFn>(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);

    timeoutId.current = window.setTimeout(() => {
      callback.current();
    }, delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);

  useEffect(() => {
    run();

    return clear;
  }, [run, clear, delay]);

  return [run];
};

export default useTimeoutFn;
