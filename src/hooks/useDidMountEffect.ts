import { useRef, useEffect, DependencyList } from 'react';

const useDidMountEffect = (fn: () => any, deps?: DependencyList) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      fn();
    } else {
      didMount.current = true;
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDidMountEffect;
