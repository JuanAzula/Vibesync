import './playButtons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faBackward, faPlay, faForward, faForwardStep, faPause, faVolumeMute, faVolumeUp, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { useLikedTracksContext } from '../../../../hooks/useLikedSongs'

interface Props {
  togglePlay: () => void
  isPlaying: boolean
  toggleMute: () => void
  isMuted: boolean
  track: number
}

export const PlayButtons = ({ togglePlay, isPlaying, toggleMute, isMuted, track }: Props) => {
  const { likedTracks, addToLikedTracks, removeFromLikedTracks } = useLikedTracksContext()
  console.log('savedState', track)
  console.log('likedTracks', likedTracks)

  const checkTracksinLikedTracks = (track: any) => {
    if (likedTracks[0] === null) {
      return false
    }
    if (likedTracks.find((item: any) => item.id === track.id)) {
      return true
    }
    return false
  }

  const handleHeartClick = () => {
    if (checkTracksinLikedTracks(track)) {
      console.log('sista')
      removeFromLikedTracks(track)
    } else {
      console.log('nosta')
      addToLikedTracks(track)
    }
  }
  return (

    <>
      <FontAwesomeIcon className='mute-btn' icon={isMuted ? faVolumeMute : faVolumeUp} onClick={toggleMute} />
      <div className="button-container">
        <FontAwesomeIcon icon={faBackwardStep} />
        <FontAwesomeIcon icon={faBackward} />
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} onClick={togglePlay} />
        <FontAwesomeIcon icon={faForward} />
        <FontAwesomeIcon icon={faForwardStep} />
        <FontAwesomeIcon icon={ checkTracksinLikedTracks(track) ? faHeart : faHeartRegular} onClick={handleHeartClick} />
      </div>
    </>
  )
}
