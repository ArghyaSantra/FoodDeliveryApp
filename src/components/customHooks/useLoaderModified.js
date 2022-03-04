import { useState } from "react";

const useLoader = (state) => {
  const [isLoading, setIsLoading] = useState(state);
  return [isLoading, setIsLoading];
};

export default useLoader;
