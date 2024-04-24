import { useLikedTracksContext } from '../../hooks/useLikedSongs'
import { type Track } from '../../types/data'
import './tracksPage.css'
import { SongInLine } from '../../components/songInLine'
import { useState } from 'react'

///LE TIENE QUE VENIR LA PLAYLIST /FAVSONGS POR PROPS, LA PLAYLIST POR LO MENOS
export const TracksPage = () => {
  const { likedTracks } = useLikedTracksContext()
  const [menuSwitch, setMenuSwitch] = useState(0)
  return (
    <div className='likedtracks-container'>
      <section className='likedtracks-header'>
        <h2>Liked songs</h2>
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