export const debounce = (func: any, wait: number, isImmediate = false) => {
  let timeout: number | NodeJS.Timeout | null;
  return (...args: any) => {
    const later = () => {
      timeout = null;
      if (!isImmediate) {
        func(...args);
      }
    };
    const callNow = isImmediate && !timeout;
    clearTimeout(timeout as number);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func(...args);
    }
  };
};
