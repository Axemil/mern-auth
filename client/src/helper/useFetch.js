import { useState } from "react";
import axios from "axios";

const useFetch = (setting, data) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const fetching = async () =>
    await axios.post(setting, data)
      .then((res) => setResult(res))
      .catch((e) => {
        setError(e.response.data);
      });
    return [result, error, fetching]
};

export default useFetch;
