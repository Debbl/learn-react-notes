import { useEffect, useState } from 'react';

function useLocalStorage(key) {
  const [name, setName] = useState(() => {
    console.log(window.localStorage.getItem(key));
    const name = JSON.parse(window.localStorage.getItem(key));
    return name;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(name));
  }, [name]);

  return [name, setName];
}

export default useLocalStorage;
