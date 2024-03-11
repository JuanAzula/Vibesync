import { useLikedTracksContext } from '../../hooks/useLikedSongs'
import SongCard from '../../components/songCard'
import { type Track } from '../../types/data'
import { faHeart as heartIcon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FavTracks.css'

export const FavTracks = () => {
  const { likedTracks } = useLikedTracksContext()
  return (
    <div className='likedtracks-container'>
      <section className='likedtracks-header'>
        <h2>Liked songs</h2>
        <FontAwesomeIcon icon={heartIcon}/>
      </section>
      <section className="likedtracks-content">
          {likedTracks.length > 0 &&
              likedTracks.map((track: Track) => (
              <SongCard key={track.id} track={track} />
              ))}

      </section>

    </div>

  )
}
