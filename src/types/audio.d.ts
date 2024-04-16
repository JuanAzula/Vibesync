import { MutableRefObject } from 'react';

interface AudioContextType {
  audioRef: MutableRefObject<HTMLAudioElement | null>
  isPlaying: boolean
  isMuted: boolean
  currentTime: number
  songDuration: string
  progressWidth: string
  togglePlay: () => void
  toggleMute: () => void
  formatTime: (time: number) => string
  handleProgressClick: (e: Event) => void
  audioUrl: string
  setAudioUrl: (url: string) => void
  audioImg: string
  setAudioImg: (url: string) => void
  trackId: number
  setTrackId: (id: number) => void
  setIsPlaying: (isPlaying: boolean) => void
  getSongDuration: (audioRef: any, setSongDuration: (songDuration: string) => void) => void
  setCurrentTime: (currentTime: number) => void
  setSongDuration: (songDuration: string) => void
}
