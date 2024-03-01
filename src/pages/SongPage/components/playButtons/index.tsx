import './playButtons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faBackward, faPlay, faForward, faForwardStep, faPause } from '@fortawesome/free-solid-svg-icons';

export const PlayButtons = ({ togglePlay, isPlaying }: { togglePlay: () => void; isPlaying: boolean }) => {
  return (
    <div className="button-container">
      <FontAwesomeIcon icon={faBackwardStep} />
      <FontAwesomeIcon icon={faBackward} />
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} onClick={togglePlay} />
      <FontAwesomeIcon icon={faForward} />
      <FontAwesomeIcon icon={faForwardStep} />
    </div>
  )
}