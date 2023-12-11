import { useState, useEffect } from "react";

const useFetch = (endpoint, headers) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(endpoint, {
      headers: headers,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Błąd ładowania danych z serwera");
        }
        return res.blob();
      })
      .then((data) => {
        const objectURL = URL.createObjectURL(data);
        setData(objectURL);
        setloading(false);
        setError(null);
      })
      .catch((err) => {
        setloading(false);
        setError(err.message);
      });
  }, [endpoint]);

  // console.log("Data flow: ", { data, loading, error });


  

  return { data, loading, error };
};

export default useFetch;
