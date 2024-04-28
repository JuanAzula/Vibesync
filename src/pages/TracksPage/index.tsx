import { useLikedTracksContext } from '../../hooks/useLikedSongs'
import { type Track } from '../../types/data'
import './tracksPage.css'
import { SongInLine } from '../../components/songInLine'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PlaylistService } from '../../services/PlaylistService'

export const TracksPage = () => {
  const [menuSwitch, setMenuSwitch] = useState(0)
  const location = useLocation();
  const userString = localStorage.getItem('userLogged');
  const user = userString ? JSON.parse(userString) : null;
  const accessedFrom = location.state?.accessedFrom;
  const { likedTracks } = useLikedTracksContext();

  useEffect(() => {
    const selectSongsToDisplay = async () => {
      if (accessedFrom === 'liked-songs') {
      } else if (accessedFrom.includes('playlist')) {
        await PlaylistService.getPlaylist(user?.id, accessedFrom)
      }
    }
    selectSongsToDisplay();
  }, [accessedFrom])

  return (
    <div className='likedtracks-container'>
      <section className='likedtracks-header'>
        {accessedFrom === 'liked-songs' ? <h2>Favorite Songs</h2> : <h2>'playlist.name'</h2>}
      </section>
      <section className="likedtracks-content">
        {likedTracks.length > 0 &&
          likedTracks?.map((track: Track) => (
            <SongInLine
              menuSwitchTrigger={setMenuSwitch}
              menuSwitch={menuSwitch}
              key={track.id}
              track={track}
            />
          ))}
      </section>
    </div>
  )
}