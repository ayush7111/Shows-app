import { createContext, useState } from "react";

const DetailContext = createContext("");

const DetailContextProvider = ({ children }) => {
  const [show, setShow] = useState(null);
  return (
    <DetailContext.Provider value={{ show, setShow }}>
      {children}
    </DetailContext.Provider>
  );
};

export { DetailContext, DetailContextProvider };
