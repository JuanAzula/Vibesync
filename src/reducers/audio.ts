import { useEffect, useRef, useState } from 'react'

export function useAudioReducer() {
  const initialState = localStorage.getItem('audioPlayerState')
  const initialStateParsed = JSON.parse(initialState || '{}')
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(initialStateParsed ? initialStateParsed.isPlaying : false)
  const [songDuration, setSongDuration] = useState(initialStateParsed ? initialStateParsed.songDuration : '00:00')
  const [isMuted, setIsMuted] = useState(initialStateParsed ? initialStateParsed.isMuted : false)
  const [currentTime, setCurrentTime] = useState(initialStateParsed ? initialStateParsed.currentTime : 0)
  const [progressWidth, setProgressWidth] = useState(initialStateParsed ? initialStateParsed.progressWidth : '0%')
  const [audioUrl, setAudioUrl] = useState(initialStateParsed ? initialStateParsed.audioUrl : '')
  const [audioImg, setAudioImg] = useState(initialStateParsed ? initialStateParsed.audioImg : '')
  const [trackId, setTrackId] = useState(initialStateParsed ? initialStateParsed.trackId : 0)
  const [count, setCount] = useState(-1)

  useEffect(() => {
    localStorage.setItem('audioPlayerState', JSON.stringify({
      isPlaying,
      isMuted,
      currentTime,
      songDuration,
      progressWidth,
      audioUrl,
      audioImg,
      trackId,
      count
    }))
  }, [isPlaying, isMuted, currentTime, songDuration, progressWidth, audioUrl, audioImg, trackId, count])

  useEffect(() => {
    getSongDuration(audioRef, setSongDuration)
  }, [audioRef?.current?.src])

  setInterval(() => {
    handleTimeUpdate()
    handleTrackEnded()
  }, 100)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        void audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const getSongDuration = (audioRef: React.RefObject<HTMLAudioElement>, setSongDuration: React.Dispatch<React.SetStateAction<string>>) => {
    if (audioRef.current?.duration) {
      const duration = audioRef.current?.duration
      const minutes = Math.floor(duration / 60)
      const seconds = Math.floor(duration % 60).toString().padStart(2, '0')
      setSongDuration(`${minutes}:${seconds}`)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgressWidth(`${progress}%`)
    }
  }

  const storePreviousTrack = (id: number) => {
    const tracksList = []
    const storageTracks = localStorage.getItem('previousTrack')
    if (id === 0) return
    if (storageTracks) {
      const previousTrack = JSON.parse(storageTracks)
      tracksList.push(...previousTrack, id)
      localStorage.setItem('previousTrack', JSON.stringify(tracksList))
    } else {
      localStorage.setItem('previousTrack', JSON.stringify([id]))
    }
  }

  const handleTrackEnded = () => {
    if (audioRef.current?.ended) {
      storePreviousTrack(trackId)
      const storageTracks = localStorage.getItem('allTracks')
      const tracks = JSON.parse(storageTracks || '{}')
      const tracksLength = tracks.length
      let randomNumber = Math.floor(Math.random() * tracksLength)
      if (randomNumber === tracksLength) {
        randomNumber = tracksLength - 1
        const track = tracks[randomNumber]
        setAudioUrl(track.url)
        setAudioImg(track.thumbnail)
        setTrackId(track.id)
        setCount(-1)
        localStorage.setItem('localTrack', JSON.stringify(track))
        setTimeout(() => {
          getSongDuration(audioRef, setSongDuration)
        }, 170)
        setIsPlaying(false)
      } else if (randomNumber === trackId - 1) {
        randomNumber = trackId - 2
        const track = tracks[randomNumber]
        setAudioUrl(track.url)
        setAudioImg(track.thumbnail)
        setTrackId(track.id)
        setCount(-1)
        localStorage.setItem('localTrack', JSON.stringify(track))
        setTimeout(() => {
          getSongDuration(audioRef, setSongDuration)
        }, 100)
        setIsPlaying(false)
      }
      const track = tracks[randomNumber]
      setAudioUrl(track.url)
      setAudioImg(track.thumbnail)
      setTrackId(track.id)
      setCount(-1)
      localStorage.setItem('localTrack', JSON.stringify(track))
      setTimeout(() => {
        getSongDuration(audioRef, setSongDuration)
      }, 100)
      setIsPlaying(false)
    }
  }

  const handleNextTrack = () => {
    const storageTracks = localStorage.getItem('allTracks')
    const tracks = JSON.parse(storageTracks || '{}')
    const tracksLength = tracks.length
    const randomNumber = Math.floor(Math.random() * tracksLength)
    if (randomNumber === tracksLength || randomNumber === trackId - 1) {
      handleNextTrack()
    }
    storePreviousTrack(trackId)
    const track = tracks[randomNumber]
    setAudioUrl(track.url)
    setAudioImg(track.thumbnail)
    setTrackId(track.id)
    setCount(-1)
    localStorage.setItem('localTrack', JSON.stringify(track))
    setTimeout(() => {
      getSongDuration(audioRef, setSongDuration)
    }, 100)
    setIsPlaying(false)
  }

  const handlePreviousTrack = () => {
    const storageTracks = localStorage.getItem('allTracks')
    const tracks = JSON.parse(storageTracks || '{}')
    const previousStorageTrack = localStorage.getItem('previousTrack')
    const previousTrackObj = previousStorageTrack ? JSON.parse(previousStorageTrack) : trackId
    const previousTrackIndex = previousTrackObj[previousTrackObj.length + count]
    const track = tracks[previousTrackIndex - 1]
    setTimeout(() => {
      setAudioUrl(track.url)
      setAudioImg(track.thumbnail)
      setTrackId(track.id)
      localStorage.setItem('localTrack', JSON.stringify(track))
      if (count > -previousTrackObj.length) {
        setCount(count - 1)
      }
    }, 200)
    setIsPlaying(false)
  }

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left
      const progressWidth = progressBar.clientWidth
      const clickedTime = (clickPosition / progressWidth) * audioRef.current.duration
      audioRef.current.currentTime = clickedTime
      setCurrentTime(clickedTime)
    }
  }

  return {
    audioRef,
    isPlaying,
    isMuted,
    currentTime,
    songDuration,
    progressWidth,
    audioUrl,
    audioImg,
    trackId,
    setTrackId,
    setAudioImg,
    setAudioUrl,
    togglePlay,
    toggleMute,
    formatTime,
    handleProgressClick,
    setIsPlaying,
    setSongDuration,
    setCurrentTime,
    getSongDuration,
    handleNextTrack,
    handlePreviousTrack
  }
}
