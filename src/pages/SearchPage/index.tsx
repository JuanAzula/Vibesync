import './SearchPage.css'
import CategoryBtn from '../../styledComponents/categoryBtn'
import { SearchBar } from '../../components/SearchBar/searchBar'
import { useSearchContext } from '../../context/Search'
import { type Album, type Track, type Artist } from '../../types/data'
import { AlbumCard } from '../../components/albumCard'
import { ArtistCard } from '../../components/artistCard'
import SongCard from '../../components/songCard'
import 'react-loading-skeleton/dist/skeleton.css'

const SearchPage: React.FC = () => {
  const { searchInput, handleSearch, searchData } = useSearchContext()

  const handleTopSearchClick = (value: string) => {
    handleSearch(value)
  }

  return (
    <>
      <main className='search-main-container'>
        <section>
          <SearchBar value={searchInput} />
          <h2>Top searches</h2>
          <CategoryBtn onClick={() => { handleTopSearchClick('canserbero') }}>Canserbero</CategoryBtn>
          <CategoryBtn onClick={() => { handleTopSearchClick('residente') }}>Residente</CategoryBtn>
          <CategoryBtn onClick={() => { handleTopSearchClick('electro') }}>Electro</CategoryBtn>
          <CategoryBtn onClick={() => { handleTopSearchClick('trap') }}>Trap</CategoryBtn>
          <CategoryBtn onClick={() => { handleTopSearchClick('blues') }}>Blues</CategoryBtn>
          <CategoryBtn onClick={() => { handleTopSearchClick('rock') }}>Rock</CategoryBtn>
          <CategoryBtn onClick={() => { handleTopSearchClick('nina simone') }}>Nina Simone</CategoryBtn>
          <CategoryBtn onClick={() => { handleTopSearchClick('kanye west') }}>Kanye West</CategoryBtn>
          <CategoryBtn onClick={() => { handleTopSearchClick('estopa') }}>Estopa</CategoryBtn>
        </section>
        <h2>Browse all</h2>
        <section>
          <div><p>Top charts</p></div>
        </section>
        <section className='search-results'>
        <>
          {searchData?.tracks?.length > 0 
            && searchData?.tracks?.map((track: Track) => (
            <SongCard key={`${track.id}-${track.artist}`} track={track} isActive={true} />
          ))}
          {searchData?.artists?.length > 0 &&
            searchData?.artists?.map((artist: Artist) => (
              <ArtistCard key={`${artist?.id}`} artist={artist} />
            ))}

          {searchData?.albums?.length > 0 &&
            searchData?.albums?.map((album: Album) => (
              <AlbumCard key={`${album.id}-${album.artist}`} album={album} />
            ))}
          </>
        </section>
        <div className='search-bottom-space'></div>
      </main>
    </>
  )
}

export default SearchPage
