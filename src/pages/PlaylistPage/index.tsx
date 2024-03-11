import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Playlist } from "../../types/data"
import { getPlaylists } from "../../services/dataService";
import { PlaylistCard } from "../../components/playlistCard/PlaylistCard";
import CardSkeleton from "../SearchPage/components/CardSkeleton";
import '../SearchPage/components/CardSkeleton.css'
import '../SearchPage/SearchPage.css'


export const PlaylistPage = () => {
    const [isLoading, setIsLoading] = useState(true)

     useEffect(() => {
        setTimeout(() => {
        setIsLoading(false)
        }, 3000)
    }, []);
    const queryPlaylist = useQuery({
        queryKey: ["playlist"],
        queryFn: async () => await getPlaylists(),
    });

    const playlistArray: Playlist[] = queryPlaylist.data || [];

    return ( <div className='likedtracks-container'>
      <section className='likedtracks-header'>
        <h2>Playlists for you!</h2>
      </section>
      <section className="likedtracks-content">
      {isLoading && <CardSkeleton cards={6} />}
          {playlistArray.length > 0 &&
              playlistArray.map((playlist: Playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
              ))}

      </section>

    </div>
   )
}