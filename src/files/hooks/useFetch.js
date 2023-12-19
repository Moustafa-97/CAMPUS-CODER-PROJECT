import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (urls, name) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUrl = async () => {
      const abort = new AbortController();
      try {
        const resp = await axios.get(urls, { signal: abort.signal });
        if(resp?.data){
          setIsPending(false);
          setData(resp?.data);
          setError(null);
          localStorage.setItem(name , JSON.stringify(resp.data))
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(error);
        }
      }
      return () => abort.abort();
    };
    fetchUrl();
  }, [name, urls]);
  return { data, error, isPending };
};
export default useFetch;
