import { useState, useEffect } from "react";

const useCreateArray = (n) => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (n > 0) {
      const result = Array.from({ length: n }, (_, i) => i + 1);
      setArray(result);
    } else {
      setArray([]);
    }
  }, [n]);

  return array;
};

export default useCreateArray;
