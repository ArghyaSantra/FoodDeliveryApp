import { useEffect, useState } from "react";

const useLoader = (getDataFn) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDataFn().then((value) => {
      setData(value);
      setIsLoading(false);
    });
  }, [getDataFn]);

  return { data, isLoading };
};

export default useLoader;
