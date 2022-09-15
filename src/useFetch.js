import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error("Unable to fetch for that resource");
          }
          return res.json()
        })
        .then(data => {
          setData(data)
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
    }, 0);
  }, [url]);
  return { data, error, isPending };
}
export default useFetch;