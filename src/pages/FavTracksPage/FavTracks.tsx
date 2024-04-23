import { useLikedTracksContext } from '../../hooks/useLikedSongs'
import { type Track } from '../../types/data'
import './FavTracks.css'
import { SongInLine } from '../../components/songInLine'
import { useState } from 'react'

export const FavTracks = () => {
  const { likedTracks } = useLikedTracksContext()
  const [menuSwitch, setMenuSwitch] = useState(false)
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
  ////mousedown event para ver QUE songInLine se clika para abrir el modal y A LA VEZ cerrar el resto 
      </section>

    </div>

  )
}
