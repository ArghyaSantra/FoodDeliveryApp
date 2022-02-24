import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useLoaderAndRedux = (getDataFn, actionFn, selector) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const data = useSelector(selector);

  useEffect(() => {
    getDataFn().then((value) => {
      dispatch(actionFn(value));
      setIsLoading(false);
    });
  }, [getDataFn]);

  return { data, isLoading };
};

export default useLoaderAndRedux;
