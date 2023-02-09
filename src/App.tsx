import React, { memo, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import PhotoGrid from './components/photoGrid/photoGrid';
import SearchBar from './components/searchBar/searchBar';

import './App.css';

const queryClient = new QueryClient();

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchQuery]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <SearchBar setSearchQuery={setSearchQuery}></SearchBar>
          <PhotoGrid searchQuery={searchQuery}></PhotoGrid>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default memo(App);
