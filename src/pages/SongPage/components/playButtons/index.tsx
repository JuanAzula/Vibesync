import './playButtons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faPlay, faForwardStep, faPause, faVolumeMute, faVolumeUp, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { useLikedTracksContext } from '../../../../hooks/useLikedSongs'
import { StyledLink } from '../../../../styledComponents/styledLink'
import { useAudioContext } from '../../../../hooks/useAudio'
import { type Track } from '../../../../types/data'
import { toast } from 'sonner'

interface Props {
  togglePlay: () => void
  isPlaying: boolean
  toggleMute: () => void
  isMuted: boolean
  track: Track
  handleNextTrack: () => void
  handlePreviousTrack: () => void
}

export const PlayButtons = ({ togglePlay, isPlaying, toggleMute, isMuted, track, handleNextTrack, handlePreviousTrack }: Props) => {
  const { likedTracks, addToLikedTracks, removeFromLikedTracks } = useLikedTracksContext()
  const {
    audioImg,
    trackId
  } = useAudioContext()
  const checkTracksinLikedTracks = (track: Track) => {
    if (likedTracks[0] === null) {
      return false
    }
    if (likedTracks.find((item: Track) => item.id === track.id)) {
      return true
    }
    return false
  }

  const handleHeartClick = () => {
    if (checkTracksinLikedTracks(track)) {
      toast('Are you sure you want to remove this track from your liked songs?', {
        action: {
          label: 'Accept',
          onClick: () => removeFromLikedTracks(track),
        },
        duration: 3000
      })
    } else {
      addToLikedTracks(track)
      toast('Track added to your liked songs', {
        icon: '✓'
      })
    }
  }
  return (

    <>
      <div className='track-img'>
        <StyledLink to={`tracks/${trackId}`}>
          <img src={audioImg} className='mini-player-img' />
        </StyledLink>
      </div>
      <div className='button-container'>
        <div className='button-container__handle-player'>
          <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} onClick={toggleMute} />
          <FontAwesomeIcon icon={faBackwardStep} onClick={handlePreviousTrack} />
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} onClick={togglePlay} />
          <FontAwesomeIcon icon={faForwardStep} onClick={handleNextTrack} />
          <FontAwesomeIcon icon={checkTracksinLikedTracks(track) ? faHeart : faHeartRegular} onClick={handleHeartClick} />
        </div>
      </div>
    </>
  )
}
