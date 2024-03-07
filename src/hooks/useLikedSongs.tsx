import { useContext } from 'react'
import { LikedTracksContext } from '../context/LikedSongs'

export const useLikedTracksContext = () => {
  const context = useContext(LikedTracksContext)
  if (!context) {
    throw new Error('useAudioContext must be used within a AudioProvider')
  }
  return context
}
