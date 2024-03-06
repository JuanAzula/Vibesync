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
          <Link to="/">
          <img src={HomeIcon} alt="Home button" className="icon" />
          Home</Link>
        </div>
        <div className="navbar-item">
          <Link to="/search">
          <img src={SearchIcon} alt="Search button" className="icon" />
          Search
          </Link>
        </div>
        <div className="navbar-item">
        <Link to="/library">
          <img src={LibraryIcon} alt="Library icon" className="icon" />My library
        </Link>
        </div>
        <div className="navbar-item">
          <Link to="/user">
          <img src={ProfileIcon} alt="User icon" className="icon" />My profile
          </Link>
        </div>
      </nav>
    </div>
    </>
  )
}
export default Navbar
