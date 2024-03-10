import './navbar.css'
import { Link, useLocation } from 'react-router-dom'
import HomeIcon from '../../assets/icons/home-outline.svg'
import SearchIcon from '../../assets/icons/search-sharp.svg'
import LibraryIcon from '../../assets/icons/book-outline.svg'
import ProfileIcon from '../../assets/icons/people-outline.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faHouse, faSearch, faUserGroup } from '@fortawesome/free-solid-svg-icons'

const Navbar: React.FC = () => {
  const location = useLocation()
  return (
    <>
      <nav className="navbar">
        <div className="navbar-item">
          <Link to="/">
            {location.pathname === '/'
              ? (
                <FontAwesomeIcon icon={faHouse} className='icon active' />
                )
              : (
                <img src={HomeIcon} alt="Home button" className="icon" />
                )}
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/search">
            {location.pathname === '/search'
              ? (
                <FontAwesomeIcon icon={faSearch} className='icon active' />
                )
              : (
                <img src={SearchIcon} alt="Search button" className="icon" />
                )}
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/library">
            {location.pathname === '/library'
              ? (
                <FontAwesomeIcon icon={faBookOpen} className='icon active' />
                )
              : (
                <img src={LibraryIcon} alt="Library icon" className="icon" />
                )}
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/user">
            {location.pathname === '/user'
              ? (
                <FontAwesomeIcon icon={faUserGroup} className='icon active' />
                )
              : (
                <img src={ProfileIcon} alt="User icon" className="icon" />
                )}
          </Link>
        </div>
      </nav>
    </>
  )
}
export default Navbar
