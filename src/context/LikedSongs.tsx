import { createContext } from 'react'
import { useLikedTracksReducer } from '../reducers/likedSongs'

export const LikedTracksContext = createContext({} as any)

export function LikedTracksProvider ({ children }: { children: React.ReactNode }) {
  const { likedTracks, addToLikedTracks, removeFromLikedTracks, setLikedTracks } = useLikedTracksReducer()
  return (
                <LikedTracksContext.Provider value={{
                  likedTracks,
                  setLikedTracks,
                  addToLikedTracks,
                  removeFromLikedTracks
                }}>
                        {children}
                </LikedTracksContext.Provider>
  )
}
