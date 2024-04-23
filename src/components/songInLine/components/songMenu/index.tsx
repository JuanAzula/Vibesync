import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Track } from '../../../../types/data';
import './songMenu.css'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
  track: Track
}

export const SongMenu = ({track} : Props) => {

  return (
    <div className="menu-container">
      <span className='menu-option'>Delete from Album</span>
      <span className='menu-option'>Play Song</span>
      <div className="submenu-container">
        <span>Go to Artist</span>
        <FontAwesomeIcon className='submenu-icon' icon={faChevronRight} />
      </div>
      <div className="submenu-container">
        <span>Go to Album</span>
        <FontAwesomeIcon className='submenu-icon' icon={faChevronRight} />
      </div>
      <div className="submenu-container">
        <span>Add to Playlist</span>
        <FontAwesomeIcon className='submenu-icon' icon={faChevronRight} />
      </div>
      <span className='menu-option'>Add to FavSongs</span>
    </div>
  )
}

