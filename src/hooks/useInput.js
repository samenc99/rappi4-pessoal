import { useState, useEffect } from "react";

export function useInput(callback) {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    if (e && e.target && e.target.value) {
      setValue(e.target.value);
    } else setValue("");
  };

  useEffect(() => {
    if (typeof callback === "function") callback(value);
  }, [value]);

  return [value, handleInput];
}