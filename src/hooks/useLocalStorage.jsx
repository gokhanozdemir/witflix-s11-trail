import { useState } from 'react';

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

  // if you want to set state optionally, use the third method
  const setStateOnly = (data) => { setValue(data); };

  return [value, setToLocalStorage, setStateOnly];
}
