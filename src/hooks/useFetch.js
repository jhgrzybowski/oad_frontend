import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) {
          throw Error("Błąd ładowania danych z serwera");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useFetch;
