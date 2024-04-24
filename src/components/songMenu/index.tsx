import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Track } from '../../types/data';
import './songMenu.css'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
  track: Track
  clickPosition: ClickPosition
}

type ClickPosition = {
  x: number;
  y: number;
};

export const SongMenu = ({track, clickPosition} : Props) => {

  const menuStyle: React.CSSProperties = {
    position: 'fixed',
    top: clickPosition.y + 'px', 
    right: '0', 
    transform: 'translateX(-50%)',
  };

  const deleteSongFromPlaylist = () => {

  } 

  const playSong = () => {
      //se puede hacer ya
  }

  const goToArtist = () => {
      //se puede hacer ya
  }

  const goToAlbum = () => {
      //se puede hacer ya
  }

  const addToPlaylist = () => {

  }

  const addToFavSongs = () => {

  }

  return (
    <div className="menu-container" style={menuStyle}>
      <span className='menu-option' onClick={deleteSongFromPlaylist}>Delete from Playlist</span>
      <span className='menu-option' onClick={playSong}>Play Song</span>
      <div className="submenu-container" onClick={goToArtist}>
        <span>Go to Artist</span>
        <FontAwesomeIcon className='submenu-icon' icon={faChevronRight} />
      </div>
      <div className="submenu-container" onClick={goToAlbum}>
        <span>Go to Album</span>
        <FontAwesomeIcon className='submenu-icon' icon={faChevronRight} />
      </div>
      <div className="submenu-container" onClick={addToPlaylist}>
        <span>Add to Playlist</span>
        <FontAwesomeIcon className='submenu-icon' icon={faChevronRight} />
      </div>
      <span className='menu-option' onClick={addToFavSongs}>Add to FavSongs</span>
    </div>
  )
}

