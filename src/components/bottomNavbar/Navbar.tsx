import './navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import HomeIcon from '../../assets/icons/home-outline.svg'
import SearchIcon from '../../assets/icons/search-sharp.svg'
import LibraryIcon from '../../assets/icons/book-outline.svg'
import ProfileIcon from '../../assets/icons/people-outline.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faHouse, faSearch, faUserGroup, faCirclePlay as faCirclePlaySolid } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'

const Navbar: React.FC = () => {
  const location = useLocation()
  const [prevPath, setPrevPath] = useState<string>(location.pathname)

  useEffect(() => {
    setPrevPath(location.pathname)
  }, [location.pathname])

  const shouldAnimate = (path: string) => {
    return prevPath !== path ? { scale: 2, transition: { duration: 0.3 } } : {}
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-item">
          <Link to="/">
          <motion.div whileTap={shouldAnimate('/')}>
            {location.pathname === '/'
              ? (
                <FontAwesomeIcon icon={faHouse} className='icon active' />
                )
              : (
                <img src={HomeIcon} alt="Home button" className="icon" />
                )}
          </motion.div>
          </Link>
        </div>
        <div className="navbar-item">
        <motion.div whileTap={shouldAnimate('/search')} >
          <Link to="/search">
            {location.pathname === '/search'
              ? (
                <FontAwesomeIcon icon={faSearch} className='icon active' />
                )
              : (
                <img src={SearchIcon} alt="Search button" className="icon" />
                )}
          </Link>
          </motion.div>
        </div>
        <div>
          <div className='navbar-item'>
            <motion.div whileTap={shouldAnimate('/tracks/track:Id')}>
              <Link to="/tracks/track:Id">
                {location.pathname === '/tracks/track:Id'
                  ? (
                    <FontAwesomeIcon icon={faCirclePlaySolid} className='icon active' />
                    )
                  : (
                    <FontAwesomeIcon icon={faCirclePlay} className='icon' />
                    )}
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="navbar-item">
          <motion.div whileTap={shouldAnimate('/library')} >
          <Link to="/library">
            {location.pathname === '/library'
              ? (
                <FontAwesomeIcon icon={faBookOpen} className='icon active' />
                )
              : (
                <img src={LibraryIcon} alt="Library icon" className="icon" />
                )}
          </Link>
          </motion.div>
        </div>
        <div className="navbar-item">
          <motion.div whileTap={shouldAnimate('/user')} >
          <Link to="/user">
            {location.pathname === '/user'
              ? (
                <FontAwesomeIcon icon={faUserGroup} className='icon active' />
                )
              : (
                <img src={ProfileIcon} alt="User icon" className="icon" />
                )}
          </Link>
          </motion.div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
