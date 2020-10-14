import { useState, useRef, useEffect } from 'react';

const useVisible = (initialValue: boolean) => {
  const [isVisible, setIsVisible] = useState(initialValue);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (null !== ref)
      if (ref.current && !ref.current.contains(event.target))
        setIsVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
};

export default useVisible;
