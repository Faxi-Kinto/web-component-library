import { useState, useEffect, useCallback } from 'react';
import { debounce } from '../helpers/utils';

export const useWindowSize = (callback: Function) => {
  const isClient = typeof window === 'object';

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return () => {};
    }

    const handleResize = debounce(() => {
      setWindowSize(getSize());
      callback();
    }, 200);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [callback, getSize, isClient]);

  return windowSize;
};
