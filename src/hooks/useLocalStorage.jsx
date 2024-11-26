import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  });

  const setToLocalStorage = (data) => {
    localStorage.setItem(key, JSON.stringify(data));
    setValue(data);
  };

  return [value, setToLocalStorage];
}
