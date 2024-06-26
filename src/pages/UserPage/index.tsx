import './userPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { type Album, type Artist, type Track, type User } from '../../types/data'
import { useQuery } from '@tanstack/react-query'
import Carrousel from '../../components/carrousel/Carrousel'
import { Link } from 'react-router-dom'
import { TracksService } from '../../services/TracksService'
import { ArtistService } from '../../services/ArtistService'
import { AlbumService } from '../../services/AlbumService'

interface Props {
  user: User
}

export const UserPage = ({ user }: Props) => {
  const queryUser = useQuery({
    queryKey: ['tracks'],
    queryFn: async () => await TracksService.getTracks()
  })
  const trackArray: Track[] = queryUser.data

  const queryArtists = useQuery({
    queryKey: ['artists'],
    queryFn: async () => await ArtistService.getArtists()
  })
  const artistArray: Artist[] = queryArtists.data

  const queryAlbums = useQuery({
    queryKey: ['albums'],
    queryFn: async () => await AlbumService.getAlbums()
  })
  const albumArray: Album[] = queryAlbums.data

  return (
    <>
      <header className='user_header'>
        <Link to="/config">
          <FontAwesomeIcon className='back_button' icon={faChevronLeft} />
        </Link>
        <div className="profile_container">
          <img src={user?.image} alt="Profile picture" />
          <h2 className='user_name'>{user?.name}</h2>
        </div>
      </header>
      <main className='user_main_container'>
        <h2>Latest songs uploaded</h2>
        <section className="user-fav-songs">
          <Carrousel
            dataTrack={trackArray}
          />
        </section>
        <h2>Related Arists</h2>
        <section className="user-related-artists">
          <Carrousel
            dataArtist={artistArray}
          />
        </section>
        <h2>Albums</h2>
        <section className="user-albums">
          <Carrousel
            dataAlbum={albumArray}
          />
        </section>
      </main>
      <div className="profile-bottom-space"></div>
    </>
  )
}
