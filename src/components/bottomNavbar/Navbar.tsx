import './navbar.css'
import { Link } from 'react-router-dom'
import HomeIcon from '../../assets/icons/home-outline.svg'
import SearchIcon from '../../assets/icons/search-circle.svg'
import LibraryIcon from '../../assets/icons/book-outline.svg'

type NavbarProps = NonNullable<unknown>

// eslint-disable-next-line no-empty-pattern
export function Navbar ({}: NavbarProps) {
  return (
    <>
    <nav className="navbar">
        <Link to="/">
            <img src={HomeIcon} alt="Home button" style={{ width: '26px' }}/>
        </Link>
        <Link to="/search">
            <img src={SearchIcon} alt="Search button" style={{ width: '26px' }} />
        </Link>
        <Link to="/library">
            <img src={LibraryIcon} alt="Library icon" style={{ width: '29px' }}/>
        </Link>
    </nav>
    </>
  )
}
