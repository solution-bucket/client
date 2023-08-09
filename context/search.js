import { useState, createContext, useContext } from "react";

const SearchContext = createContext();

const innitialState = {
 
  results: [],
  page: "",
  loading: false,
};

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState(innitialState);

  return (
    <SearchContext.Provider value={[search, setSearch, innitialState]}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
