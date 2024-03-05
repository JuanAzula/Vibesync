import { Link } from 'react-router-dom'
import HomeIcon from '../../assets/icons/home-outline.svg'
import SearchIcon from '../../assets/icons/search-sharp.svg'
import LibraryIcon from '../../assets/icons/book-outline.svg'
import ProfileIcon from '../../assets/icons/people-outline.svg'
import './navbar.css'

const Navbar: React.FC = () => {
  return (
    <>
<div>
      <nav className="navbar">
        <div className="navbar-item">
          <img src={HomeIcon} alt="Home button" className="icon" />
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-item">
          <img src={SearchIcon} alt="Search button" className="icon" />
          <Link to="/search">Search</Link>
        </div>
        <Link to="/library">
        <div className="navbar-item">
          <img src={LibraryIcon} alt="Library icon" className="icon" />
          My library
        </div>
        </Link>
        <div className="navbar-item">
          <img src={ProfileIcon} alt="User icon" className="icon" />
          <Link to="/user">My profile</Link>
        </div>
      </nav>
    </div>
    </>
  )
}
export default Navbar
