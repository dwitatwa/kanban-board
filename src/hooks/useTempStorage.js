import { useEffect, useState } from "react";
export default function useTempStorage(key, initial) {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.sessionStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
    }
    return initial;
  });

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
