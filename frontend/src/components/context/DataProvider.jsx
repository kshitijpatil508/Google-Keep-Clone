import React from "react";
import { createContext } from "react";

////////////////

const DataContext = createContext(null);

const DataProvider = () => {
  return <div>DataProvider</div>;
};

export default DataProvider;
