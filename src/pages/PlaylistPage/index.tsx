import { useQuery } from '@tanstack/react-query'
import { Playlist } from '../../types/data'
import { PlaylistCard } from '../../components/playlistCard/PlaylistCard'
import '../SearchPage/components/CardSkeleton.css'
import './playlistPage.css'
import { Link } from 'react-router-dom'
import { PlaylistService } from '../../services/PlaylistService'



export const PlaylistPage = () => {
  const queryPlaylist = useQuery({
    queryKey: ['playlist'],
    queryFn: async () => await PlaylistService.getPlaylists(),
  });

  const playlistArray: Playlist[] = queryPlaylist.data || [];

  return (

    <div className='playlist-page-container'>
      <section className='playlist-page-header'>
        <h2>Playlists for you!</h2>
      </section>
      <section className='playlist-content'>
        {playlistArray.length > 0 &&
          playlistArray.map((playlist: Playlist) => (
            <Link to="/library/tracks" state={{ accessedFrom: `playlist ${playlist.id}` }}>
              <div key={playlist.id} className='playlist-container'>
                <PlaylistCard
                  playlist={playlist}
                />
              </div>
            </Link>
          ))}
      </section>
    </div>
  );
};
