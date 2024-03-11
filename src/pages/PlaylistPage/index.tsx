<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Playlist } from "../../types/data"
import { getPlaylists } from "../../services/dataService";
import { PlaylistCard } from "../../components/playlistCard/PlaylistCard";
import CardSkeleton from "../SearchPage/components/CardSkeleton";
import SongCard from "../../components/songCard";
import { Track as track} from "../../types/data"
=======
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { type Playlist } from '../../types/data'
import { getPlaylists } from '../../services/dataService'
import { PlaylistCard } from '../../components/playlistCard/PlaylistCard'
import CardSkeleton from '../SearchPage/components/CardSkeleton'
>>>>>>> main
import '../SearchPage/components/CardSkeleton.css'
import '../FavTracksPage/FavTracks.css'
import './playlistPage.css'


export const PlaylistPage = () => {
<<<<<<< HEAD
    const [isLoading, setIsLoading] = useState(true)
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
=======
  const [isLoading, setIsLoading] = useState(true)
>>>>>>> main

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const queryPlaylist = useQuery({
    queryKey: ['playlist'],
    queryFn: async () => await getPlaylists()
  })

<<<<<<< HEAD
    const handlePlaylistClick = (playlist: Playlist) => {
      setSelectedPlaylist(playlist);
    }

    return ( 
    
      <div className='likedtracks-container'>
=======
  const playlistArray: Playlist[] = queryPlaylist.data || []

  return (<div className='likedtracks-container'>
>>>>>>> main
      <section className='likedtracks-header'>
        <h2>Playlists for you!</h2>
      </section>
      <section className="likedtracks-content">
        {isLoading && <CardSkeleton cards={6} />}
        {playlistArray.length > 0 &&
          playlistArray.map((playlist: Playlist) => (
            <div key={playlist.id} className="playlist-container">
              <PlaylistCard
                playlist={playlist}
                onClick={() => handlePlaylistClick(playlist)}
              />
              {selectedPlaylist === playlist && (
                <ul className="playlist-tracks">
                  {playlist.tracks.map((track:track) => (
                    <li key={track.id}>
                      <SongCard key={track.id} track={track} isActive={true} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </section>
    </div>
<<<<<<< HEAD
  );
};
=======
  )
}
>>>>>>> main
