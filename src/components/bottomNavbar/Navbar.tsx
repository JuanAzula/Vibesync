// import { Link } from 'react-router-dom'
import HomeIcon from '../../assets/icons/home-outline.svg'
import SearchIcon from '../../assets/icons/search-circle.svg'
import LibraryIcon from '../../assets/icons/book-outline.svg'
import './navbar.css'

const Navbar: React.FC = () => {
  return (
    <>
<div>
      <nav className="navbar">
        <div className="navbar-item">
          <img src={HomeIcon} alt="Home button" className="icon" />
          {/* <Link to="/">Inicio</Link> */}
        </div>
        <div className="navbar-item">
          <img src={SearchIcon} alt="Search button" className="icon" />
          {/* <Link to="/search">Buscar</Link> */}
        </div>
        <div className="navbar-item">
          <img src={LibraryIcon} alt="Library icon" className="icon" />
          {/* <Link to="/library">Mi música</Link> */}
        </div>
      </nav>
    </div>
    </>
  )
}
export default Navbar
