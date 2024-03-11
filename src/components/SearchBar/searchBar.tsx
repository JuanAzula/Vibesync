import { type ChangeEvent } from 'react'
import { useSearchContext } from '../../context/Search'
import './searchBar.css'

export const SearchBar: React.FC = () => {
  const { handleSearch } = useSearchContext()

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase()
    handleSearch(lowerCase)
  }

  return (
        <input
          className="searchbar-input"
          type="search"
          placeholder="Songs, albums, artists, playlists"
          onChange={inputHandler}
        />
  )
}
