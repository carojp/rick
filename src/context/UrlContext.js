import { createContext, useState } from "react";

const UrlContext = createContext();

const UrlProvider = ({ children }) => {
  const { url, setUrl } = useState("https://rickandmortyapi.com/api/character");

  const data = {
    url: url,
    setUrl: setUrl,
  };

  return <UrlContext.Provider value={data}>{children}</UrlContext.Provider>;
};

export { UrlProvider };
export default UrlContext;
