import { useLikedTracksContext } from '../../hooks/useLikedSongs'
import SongCard from '../../components/songCard'
import { type Track } from '../../types/data'
import { faHeart as heartIcon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FavTracks.css'

interface Props {
  track: Track
}

export const FavTracks = (props: Props) => {
  const { likedTracks } = useLikedTracksContext()
  console.log('liked===>', likedTracks)
  return (
    <div className='likedtracks-container'>
      <section className='likedtracks-header'>
        <h2>Liked songs</h2>
        <FontAwesomeIcon icon={heartIcon}/>
      </section>
      <section className="likedtracks-content">
          {likedTracks.length > 0 &&
              likedTracks.map((track: Track) => (
              // Render track components here
              <SongCard key={track.id} track={track} />
              ))}

      </section>

    </div>

  )
}
