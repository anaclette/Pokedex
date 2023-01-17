import {useEffect, useState} from 'react';

export const useDebouncer = (input: string = '', time: number = 500) => {
  const [debounced, setDebounced] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(input);
    }, time);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return debounced;
};
