'use client';
// needed to fetch new blogs after post
import { createContext, useContext, useState } from 'react';

const RefreshContext = createContext();

export function RefreshProvider({ children }) {
  const [refreshBlogs, setRefreshBlogs] = useState(false);

  const triggerRefresh = () => setRefreshBlogs(prev => !prev);

  return (
    <RefreshContext.Provider value={{ refreshBlogs, triggerRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
}

export const useRefresh = () => useContext(RefreshContext);