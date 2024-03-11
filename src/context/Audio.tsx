import { createContext } from 'react'
import { useAudioReducer } from '../reducers/audio'

export const AudioContext = createContext({} as any)

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    audioRef,
    isPlaying,
    isMuted,
    currentTime,
    songDuration,
    progressWidth,
    togglePlay,
    toggleMute,
    formatTime,
    handleProgressClick,
    setAudioUrl,
    audioUrl,
    audioImg,
    setAudioImg,
    trackId,
    setTrackId,
    setIsPlaying,
    getSongDuration,
    setCurrentTime,
    setSongDuration,
    handleNextTrack,
    handlePreviousTrack
  } = useAudioReducer()

  return (
        <AudioContext.Provider
        value={
            {
              audioRef,
              isPlaying,
              isMuted,
              currentTime,
              songDuration,
              progressWidth,
              togglePlay,
              toggleMute,
              formatTime,
              handleProgressClick,
              audioUrl,
              setAudioUrl,
              audioImg,
              setAudioImg,
              trackId,
              setTrackId,
              setIsPlaying,
              getSongDuration,
              setCurrentTime,
              setSongDuration,
              handleNextTrack,
              handlePreviousTrack
            }
        }>
            {children}
        </AudioContext.Provider>
  )
}
