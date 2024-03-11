import './SearchPage.css'
import CategoryBtn from '../../styledComponents/categoryBtn'
import { SearchBar } from '../../components/SearchBar/searchBar'
import { useSearchContext } from "../../context/Search";
import { useQuery } from "@tanstack/react-query";
import { getAlbums, getArtists, getPlaylists, getTracks } from "../../services/dataService";
import { Album, Playlist, Track, Artist } from "../../types/data";
import { PlaylistCard } from "../../components/playlistCard/PlaylistCard";
import { AlbumCard } from '../../components/albumCard';
import { ArtistCard } from '../../components/artistCard';
import SongCard from '../../components/songCard';
import { useAudioContext } from '../../hooks/useAudio';
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from './components/CardSkeleton';
import { useEffect, useState } from 'react';



const SearchPage: React.FC = () => {
  const { searchInput, handleSearch } = useSearchContext();
  const { setTrackId } = useAudioContext()


  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, []);

  const handleTopSearchClick = (value: string) => {
    handleSearch(value); // Update the search input with the value of the clicked button
  };
 
  const queryTracks = useQuery({
    queryKey: ["tracks"],
    queryFn: async () => await getTracks(),
  });
  const trackArray: Track[] = queryTracks.data || [];

  const queryPlaylist = useQuery({
    queryKey: ["playlist"],
    queryFn: async () => await getPlaylists(),
  });
  const playlistArray: Playlist[] = queryPlaylist.data || [];

  const queryAlbum = useQuery({
    queryKey: ["album"],
    queryFn: async () => await getAlbums(),
  });
  const albumArray: Album[] = queryAlbum.data || [];

  const queryArtist = useQuery({
    queryKey: ["artist"],
    queryFn: async () => await getArtists(),
  });
  const artistArray: Artist[] = queryArtist.data || [];

  // Filter tracks based on the search input
  const filteredTracks = trackArray.filter((track) =>
    track.name.toLowerCase().includes(searchInput) ||
    track.artist.toLowerCase().includes(searchInput) ||
    track.genre.toLowerCase().includes(searchInput)
  );

  //filter artist based on the search input
  const filteredArtists = artistArray.filter((artist) =>
    artist.name.toLowerCase().includes(searchInput) ||
    (artist.genres && artist.genres.some(genre =>
      genre.toLowerCase().includes(searchInput)
    ))
  );

  // Filter playlists based on the search input
  const filteredPlaylists = playlistArray.filter((playlist) =>
    playlist.name.toLowerCase().includes(searchInput)
  );

  // Filter albums based on the search input
  const filteredAlbums = albumArray.filter((album) =>
    album.name.toLowerCase().includes(searchInput)||
    album.artist.toLowerCase().includes(searchInput)
  );
  
  return (
        <>
        <main className="search-main-container">
        <section>
        <SearchBar />
        <h2>Top searches</h2>
          <CategoryBtn onClick={() => handleTopSearchClick("Adele")}>Adele</CategoryBtn>
          <CategoryBtn onClick={() => handleTopSearchClick("Taylor Swift")}>Taylor Swift</CategoryBtn>
          <CategoryBtn onClick={() => handleTopSearchClick("Ed Sheeran")}>Ed Sheeran</CategoryBtn>
          <CategoryBtn onClick={() => handleTopSearchClick("Michael Jackson")}>Michael Jackson</CategoryBtn>
          <CategoryBtn onClick={() => handleTopSearchClick("Drake")}>Drake</CategoryBtn>
          <CategoryBtn onClick={() => handleTopSearchClick("Harry Styles")}>Harry Styles</CategoryBtn>
          <CategoryBtn onClick={() => handleTopSearchClick("Bruno Mars")}>Bruno Mars</CategoryBtn>
          <CategoryBtn onClick={() => handleTopSearchClick("Post Malone")}>Post Malone</CategoryBtn>
          <CategoryBtn onClick={() => handleTopSearchClick("Imagine Dragons")}>Imagine Dragons</CategoryBtn>
        </section>
        <h2>Browse all</h2>
        <section>
          <div><p>Top charts</p></div>
        </section>
        <section className="search-results">
            {isLoading && <CardSkeleton cards={6} />}
            {filteredTracks.length === 0 && 
             filteredAlbums.length === 0 &&
             filteredArtists.length === 0 &&
             filteredPlaylists.length === 0 ?(
              <p className='search-results-no-match'>No matches have been found</p>
            ) : (
            <>
            {filteredTracks.map((track) => (
              <SongCard key={`${track.id}-${track.artist}-${track.genre}`} track={track} isActive={true} />
              ))}
            {filteredArtists.length > 0 &&
               filteredArtists.map((artist) => (
                <ArtistCard key={`${artist.id}-${artist.genres.join('-')}`} artist={artist} />
                ))}
            {filteredPlaylists.length > 0 &&
              filteredPlaylists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
            {filteredAlbums.length > 0 &&
               filteredAlbums.map((album) => (
                  <AlbumCard key={`${album.id}-${album.artist}`} album={album} />
                ))}
    </>
  )}
</section>
        <div className="search-bottom-space"></div>
        </main>
        </>
  )
}

export default SearchPage
