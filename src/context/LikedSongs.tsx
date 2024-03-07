import { createContext, useState } from 'react'

export const LikedTracksContext = createContext({} as any)

function useLikedTracksReducer () {
  const initialLikedTracks = window.localStorage.getItem('likedTracks')
  const likedTracksChecked = initialLikedTracks ? JSON.parse(initialLikedTracks) : []
  const [likedTracks, setLikedTracks] = useState(likedTracksChecked)

  const addToLikedTracks = (track: any) => {
    if (likedTracks.find((item: any) => item.id === track.id)) {
      return
    }

    window.localStorage.setItem('likedTracks', JSON.stringify([...likedTracks, track]))
    setLikedTracks([...likedTracks, track])
  }

  const removeFromLikedTracks = (track: any) => {
    const newLikedTracks = likedTracks.filter((item: any) => item.id !== track.id)
    window.localStorage.setItem('LikedTracks', JSON.stringify(newLikedTracks))
    setLikedTracks(newLikedTracks)
  }

  return { likedTracks, setLikedTracks, addToLikedTracks, removeFromLikedTracks }
}

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
