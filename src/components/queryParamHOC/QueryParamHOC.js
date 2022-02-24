import React from "react";
import { useParams } from "react-router-dom";

const QueryParamHOC = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};

export default QueryParamHOC;
