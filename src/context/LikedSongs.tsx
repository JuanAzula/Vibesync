// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface LikedSongsContextType {
  likedSongs: string[]
  toggleLiked: (songId: string) => void
}

const LikedSongsContext = createContext<LikedSongsContextType>({
  likedSongs: [],
  toggleLiked: () => {}
})

export const useLikedSongs = () => useContext(LikedSongsContext)

export const LikedSongsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [likedSongs, setLikedSongs] = useState<string[]>([])

  const toggleLiked = (songId: string) => {
    if (likedSongs.includes(songId)) {
      setLikedSongs(likedSongs.filter(id => id !== songId))
    } else {
      setLikedSongs([...likedSongs, songId])
    }
    console.log('toggle==>', likedSongs, 'songId==>', songId)
  }

  return (
    <LikedSongsContext.Provider value={{ likedSongs, toggleLiked }}>
      {children}
    </LikedSongsContext.Provider>
  )
}
