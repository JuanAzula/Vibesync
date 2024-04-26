import { useLikedTracksContext } from '../../hooks/useLikedSongs'
import { type Track } from '../../types/data'
import './tracksPage.css'
import { SongInLine } from '../../components/songInLine'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getPlaylist } from '../../services/dataService'
import { PlaylistService } from '../../services/PlaylistService'
import { TracksService } from '../../services/TracksService'

type FetchedTracked = {
  id: string
  playlistId: string
  trackId: string
};

///LE TIENE QUE VENIR LA PLAYLIST /FAVSONGS POR PROPS, LA PLAYLIST POR LO MENOS
export const TracksPage = () => {
  const [menuSwitch, setMenuSwitch] = useState(0)
  const location = useLocation();
  const userString = localStorage.getItem('userLogged');
  const user = userString ? JSON.parse(userString) : null;
  const accessedFrom = location.state?.accessedFrom;
  // const { likedTracks } = useLikedTracksContext();
  let songsToPlay: any = []

  useEffect(() => {
    const selectSongsToDisplay =  async () => {
      if (accessedFrom === 'liked-songs') {
        console.log('VIENE DE LIKED SONGS')
        console.log(accessedFrom)
        ///fetch del array de favsongs del usuario (se llamarán songs)

      } else if (accessedFrom.includes('playlist')) {
        const playlistId = accessedFrom.slice(-24)
        const response = await PlaylistService.getPlaylist(user?.id, playlistId)
        const {tracksConnections}: {tracksConnections: FetchedTracked[]} = response
        tracksConnections.forEach(async track => {
          const fetchedTracked = await TracksService.getTrack(track.trackId)
          songsToPlay.push(fetchedTracked)
          console.log({songsToPlay})
        })

      } else if (accessedFrom.includes('album')) {
        console.log('VIENE DE ALBUMS')
        console.log(accessedFrom)
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
          {songsToPlay.length > 0 &&
              songsToPlay.map((track: Track) => (
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