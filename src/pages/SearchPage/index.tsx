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


const SearchPage: React.FC = () => {
  const { searchInput } = useSearchContext();
 
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
    track.name.toLowerCase().includes(searchInput)
  );

  //filter artist based on the search input
  const filteredArtists = artistArray.filter((artist) =>
    artist.name.toLowerCase().includes(searchInput)
  );

  // Filter playlists based on the search input
  const filteredPlaylists = playlistArray.filter((playlist) =>
    playlist.name.toLowerCase().includes(searchInput)
  );

  // Filter albums based on the search input
  const filteredAlbums = albumArray.filter((album) =>
    album.name.toLowerCase().includes(searchInput)
  );
  
  return (
        <>
        <main className="search-main-container">
        <section>
        <SearchBar />
        <h2>Top searches</h2>
          <CategoryBtn>Adele</CategoryBtn>
          <CategoryBtn>Taylor Swift</CategoryBtn>
          <CategoryBtn>Ed Sheeran</CategoryBtn>
          <CategoryBtn>Michael Jackson</CategoryBtn>
          <CategoryBtn>Drake</CategoryBtn>
          <CategoryBtn>Harry Styles</CategoryBtn>
          <CategoryBtn>Bruno Mars</CategoryBtn>
          <CategoryBtn>Post Malone</CategoryBtn>
          <CategoryBtn>Harry Styles</CategoryBtn>
          <CategoryBtn>Imagine Dragons</CategoryBtn>
        </section>
        <h2>Browse all</h2>
        <section>
          <div><p>Top charts</p></div>
        </section>
        <section className="search-results">
          {/* Render the filtered results */}
          {filteredTracks.length > 0 &&
            filteredTracks.map((track) => (
              // Render track components here
              <SongCard key={track.id} track={track} />
            ))}
           {filteredArtists.length > 0 && 
           filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist}/>
           ))} 
          {filteredPlaylists.length > 0 &&
            filteredPlaylists.map((playlist) => (
              // Render playlist components here
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          {filteredAlbums.length > 0 &&
            filteredAlbums.map((album) => (
              // Render album components here
              <AlbumCard key={album.id} album={album} />
            ))}
        </section>
        <div className="search-bottom-space"></div>
        </main>
        </>
  )
}

export default SearchPage
