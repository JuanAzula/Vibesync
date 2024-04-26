import { type Album, type Artist, type Playlist, type Track } from '../../types/data'
import SongCard from '../songCard'
import './Carrousel.css'
import { ArtistCard } from '../artistCard'
import { AlbumCard } from '../albumCard'
import { PlaylistCard } from '../playlistCard/PlaylistCard'
import { Link } from 'react-router-dom'

interface Props {
  dataTrack?: Track[]
  dataArtist?: Artist[]
  dataAlbum?: Album[]
  isActive?: boolean
  dataPlaylist?: Playlist[]
}

const Carrousel = ({ dataTrack, dataArtist, dataAlbum, isActive, dataPlaylist }: Props) => {
  return (
    <>
      {dataTrack && (
        <div className="products_scroll">
          {dataTrack.map(track => (
              <SongCard key={track.id} track={track} isActive={isActive} />
          ))}
        </div>
      )}
      {dataArtist && (
        <div className="products_scroll">
          {dataArtist.map(artist => (
            <ArtistCard artist={artist} />
          ))}
        </div>
      )}
      {dataAlbum && (
        <div className="products_scroll">
          {dataAlbum.map(album => (
            <Link to="/library/tracks" state={{ accessedFrom: `album ${album.id}` }}>
            <AlbumCard key={album.id} album={album} />
            </Link>
          ))}
        </div>
      )}
      {dataPlaylist && (
        <div className="products_scroll">
          {dataPlaylist.map(playlist => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      )}
    </>)
}

export default Carrousel
