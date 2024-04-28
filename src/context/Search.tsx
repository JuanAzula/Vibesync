import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { SearchService } from '../services/searchService'
import { type Album, type Track, type Artist, Genre } from '../types/data'

interface SearchContextProps {
  searchData: {
    albums: Album[]
    tracks: Track[]
    artists: Artist[]
    genre: Genre[]
  }
  searchInput: string
  handleSearch: (input: string) => void
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider')
  }
  return context
}

interface SearchProviderProps {
  children: ReactNode
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [searchData, setSearchData] = useState({
    albums: [],
    tracks: [],
    artists: [],
    genre: []
  })

  const handleSearch = (input: string) => {
    setSearchInput(input)
  }

  const value: SearchContextProps = {
    searchData,
    searchInput,
    handleSearch
  }

  const searchInfo = async () => {
    const data = await SearchService.search(searchInput)
    setSearchData(data)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => searchInfo(), 200)
    return () => clearTimeout(timeoutId)
  }, [searchInput])

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
