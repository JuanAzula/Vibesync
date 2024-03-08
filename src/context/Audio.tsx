import { createContext, useEffect, useRef, useState } from 'react'
import { Track } from '../types/data'

export const AudioContext = createContext({} as any)

function useAudioReducer () {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [songDuration, setSongDuration] = useState('00:00')
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progressWidth, setProgressWidth] = useState('0%')
  const [audioUrl, setAudioUrl] = useState('')
  const [audioImg, setAudioImg] = useState('')
  const [trackId, setTrackId] = useState(0)

  useEffect(() => {
    localStorage.setItem('audioPlayerState', JSON.stringify({
      isPlaying,
      isMuted,
      currentTime,
      songDuration,
      progressWidth,
      audioUrl,
      audioImg,
      trackId
    }))
  }, [isPlaying, isMuted, currentTime, songDuration, progressWidth, audioUrl, audioImg, trackId])

  useEffect(() => {
    const savedState = localStorage.getItem('audioPlayerState')
    if (savedState) {
      const initialState = JSON.parse(savedState)
      setIsPlaying(initialState.isPlaying)
      setIsMuted(initialState.isMuted)
      setCurrentTime(initialState.currentTime)
      setSongDuration(initialState.songDuration)
      setProgressWidth(initialState.progressWidth)
      setAudioUrl(initialState.audioUrl)
      setAudioImg(initialState.audioImg)
      setTrackId(initialState.trackId)
    }
  }, [])

  useEffect(() => {
    if (isPlaying && audioRef.current) void audioRef.current.play()
  }, [isPlaying])

  useEffect(()=> {
    getSongDuration()
  }, [audioRef?.current?.src])

  setInterval(()=> {
    handleTimeUpdate()
    handleTrackEnded()
  }, 100)

  /// esto junto con el audioRef pódeis meterlo en un custom Hook si queréis (usePlay), porque lo utilizaréis más veces. No lo hago por no liar
  
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

  // lo mismo con esto, useMute por ejemplo
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // /// lo mismo con esta función, metedla en una carpeta de utils/globals para limpiar el código. Lo dejo aquí para que os sea más fácil entederlo. Explicación-> Simplemente coges la duraciónm, que te la dan en segundos, y la separas en minutos y segundos.
  const getSongDuration = () => {
    if (audioRef.current?.duration) {
      const duration = audioRef.current?.duration
      const minutes = Math.floor(duration / 60)
      const seconds = Math.floor(duration % 60).toString().padStart(2, '0')
      setSongDuration(`${minutes}:${seconds}`)
      console.log(`${minutes}:${seconds}`)
    }
  }

  /// Coges la duración de la canción, que son segundos, y analizas en que segundo estás, y coges el porcentaje. Aquí también coges el currentTime que se renderiza a medida que avanza la canción.
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgressWidth(`${progress}%`)
    }
  }

  const handleTrackEnded = () => {
    if(audioRef.current?.ended){
      const storageTracks = localStorage.getItem('allTracks')
      const tracks = JSON.parse(storageTracks ? storageTracks:'{}')
      const tracksLength = tracks.length
      let randomNumber = Math.floor(Math.random()*tracksLength)
      if(randomNumber === 8 ){
        randomNumber = 7
        const track = tracks[randomNumber]
        setAudioUrl(track.url)
        setAudioImg(track.thumbnail)
        setTrackId(track.id)
        setTimeout(()=>{
          getSongDuration()
        }, 100)
        setIsPlaying(false)
        // togglePlay()

      } else if (randomNumber == trackId -1){
        randomNumber = trackId - 2
        const track = tracks[randomNumber]
        setAudioUrl(track.url)
        setAudioImg(track.thumbnail)
        setTrackId(track.id)
        
        setTimeout(()=>{
          getSongDuration()
        }, 100)
        setIsPlaying(false)
        // togglePlay()

      }
      const track = tracks[randomNumber]
        setAudioUrl(track.url)
        setAudioImg(track.thumbnail)
        setTrackId(track.id)
        
        setTimeout(()=>{
          getSongDuration()
        }, 100)
        setIsPlaying(false)
        // togglePlay()
    }
  }

  /// Esta función sirve para formatear el currentTime, recibe el currentTime por parametro y lo formatea en min y sec para enseñarlo en la pantalla. LO MISMO, esto, idealmente, en UTILS/GLOBALS, no aquí
  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  /// esto es para poder ir a la parte de la canción que queráis clickando. Si no entendeis la linea 76 es normal. YO TAMPOCO JEJEJE YUHUUUUU
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

  // sin este useEffect intenta coger la duración de la canción antes de que se carguen los metadatos de la canción, por lo que no coge la duración. Aquí simplemente pues escucha a que se carguen los metadatos pa ejecutar la funcion getSongDuration, capici? Ale pues
  useEffect(() => {
    const handleLoadedMetadata = () => {
      getSongDuration()
    }

    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata)
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
      return () => {
        audioRef.current?.removeEventListener('loadedmetadata', handleLoadedMetadata)
        audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [])

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
    getSongDuration
  }
}

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
    setSongDuration
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
              setSongDuration
            }
        }>
            {children}
        </AudioContext.Provider>
  )
}
