import './playButtons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faBackward, faPlay, faForward, faForwardStep, faPause, faVolumeMute, faVolumeUp, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

interface Props {
  togglePlay: () => void
  isPlaying: boolean
  toggleMute: () => void
  isMuted: boolean
}

export const PlayButtons = ({ togglePlay, isPlaying, toggleMute, isMuted }: Props) => {
  const [heartIcon, setHeartIcon] = useState(faHeart)

  const handleHeartClick = () => {
    setHeartIcon(heartIcon === faHeart ? faHeartRegular : faHeart)
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
        <FontAwesomeIcon icon={heartIcon} onClick={handleHeartClick} />
      </div>
    </>
  )
}
