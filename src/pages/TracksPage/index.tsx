import { useLikedTracksContext } from '../../hooks/useLikedSongs'
import { type Track } from '../../types/data'
import './tracksPage.css'
import { SongInLine } from '../../components/songInLine'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

///LE TIENE QUE VENIR LA PLAYLIST /FAVSONGS POR PROPS, LA PLAYLIST POR LO MENOS
export const TracksPage = () => {
  const location = useLocation();
  const accessedFrom = location.state?.accessedFrom;
  const { likedTracks } = useLikedTracksContext();
  ///Si accessedFrom === liked-songs --> getAllFavSongs del user
  ///Si accessedFrom ===playlistId ---> fetch de la playlist
  if (accessedFrom === 'liked-songs') {
    ///fetch del array de favsongs del usuario (se llamarán songs)
  } else {
    ///fetch de la playlist con id === accessedFrom (se llamarán songs)
  }
  const [menuSwitch, setMenuSwitch] = useState(0)
  return (
    <div className='likedtracks-container'>
      <section className='likedtracks-header'>
        {accessedFrom === 'liked-songs' ? <h2>Favorite Songs</h2> : <h2>'playlist.name'</h2>}
      </section>
      <section className="likedtracks-content">
          {likedTracks.length > 0 &&
              likedTracks.map((track: Track) => (
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