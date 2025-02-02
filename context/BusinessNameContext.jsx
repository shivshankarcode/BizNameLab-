"use client";

import { createContext, useContext, useEffect, useState } from "react";
const QueryContext = createContext();

export const BusinessNameContext = ({ children }) => {
  const [query, setQuery] = useState(() => {
    if (typeof window !== "undefined") {
      const sessionQuery = sessionStorage.getItem("query");
      return sessionQuery ? JSON.parse(sessionQuery) : {};
    }
    return {};
  });
  useEffect(() => {
    const sessionQuery = sessionStorage.getItem("query");
    if (sessionQuery) {
      setQuery(JSON.parse(sessionQuery));
    }
  }, []);
  const updateQuery = (newQuery) => {
    setQuery((prev) => {
      const newQueryData = { ...(prev || {}), ...newQuery };
      if(typeof window !== "undefined"){
        sessionStorage.setItem("query", JSON.stringify(newQueryData));
      }
      return newQueryData;
    });
  };
  return (
    <QueryContext.Provider value={{ query, updateQuery }}>
      {children}
    </QueryContext.Provider>
  );
};
// coston hool to use the query context
export function useQueryContext() {
  return useContext(QueryContext)
}
