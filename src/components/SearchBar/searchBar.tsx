import {  ChangeEvent } from "react";
import { useSearchContext } from "../../context/Search";
import "./searchBar.css"

interface SearchBarProps {
  value: string;
}
export const SearchBar: React.FC<SearchBarProps> = ({value}) => {
    const {handleSearch} = useSearchContext();
    
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const lowerCase = e.target.value.toLowerCase();
        handleSearch(lowerCase);

    };

    return (
        <input
          className="searchbar-input"
          type="search"
          placeholder="Songs, albums, artists, playlists"
          value={value}
          onChange={inputHandler}
        />
      );
};

  
  