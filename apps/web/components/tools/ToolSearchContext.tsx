'use client';

import * as React from 'react';

type ToolSearchContextValue = {
  query: string;
  category: string;
  setQuery: (value: string) => void;
  setCategory: (value: string) => void;
};

const ToolSearchContext = React.createContext<ToolSearchContextValue | null>(null);

export function ToolSearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState('todas');

  const value = React.useMemo(
    () => ({ query, category, setQuery, setCategory }),
    [query, category],
  );

  return <ToolSearchContext.Provider value={value}>{children}</ToolSearchContext.Provider>;
}

export function useToolSearch() {
  const context = React.useContext(ToolSearchContext);
  if (!context) {
    throw new Error('useToolSearch must be used within ToolSearchProvider');
  }
  return context;
}
