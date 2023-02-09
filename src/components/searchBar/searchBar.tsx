import React, { memo, useMemo } from 'react';
import debounce from '../../helpers/debounce';
import ISearchBarProps from '../../lib/interfaces/ISearchBarProps';
import "./styles.css";

const SearchBar = memo(({ setSearchQuery }: ISearchBarProps) => {
  const debouncedSetSearchQuery = useMemo(() => debounce((query: string) => setSearchQuery(query)), [setSearchQuery]);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetSearchQuery(event.target.value);
  }

  return (
    <div className="navbar">
      <input
        className="searchbar"
        onChange={inputHandler}
        type="text"
        placeholder="Search Images"
      />
    </div>
  );
});

export default SearchBar;
