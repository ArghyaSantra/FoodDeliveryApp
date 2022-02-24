import { useEffect, useState } from "react";

const useLoader = (getDataFn) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  /*const storeData = (values) => {
    setData(values);
  };*/

  useEffect(() => {
    getDataFn().then((state) => {
      setData(state);
      setIsLoading(false);
    });
  }, [getDataFn]);

  return { data, isLoading };
};

export default useLoader;
