import { useEffect, useRef, useState } from 'react'
import { type Track } from '../../types/data'
import { PlayButtons } from './components/playButtons'
import { SongDetails } from './components/songDetails'
import './songPage.css'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getTrack as fetchTrack } from '../../services/dataService'

interface Props {
  song: Track
}

const getTrack = async (trackId: any) => {
  console.log(trackId)
  if (trackId) {
    const track = await fetchTrack(trackId)
    console.log('track', track)
    return track
  }
}

export const SongPage = () => {
  const { trackId } = useParams()

  const queryTrack = useQuery({
    queryKey: ['track'],
    queryFn: async () => await getTrack(trackId)
  })
  console.log('queryTrack', queryTrack.data)

  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [songDuration, setSongDuration] = useState('00:00')
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progressWidth, setProgressWidth] = useState('0%')

  /// /Cuando tengáis las canciones y les redireccione aquí, este código servirá para reproducir la canción de manera automática (CREO) porque el usuario ya habrá interactuado. Poneis el initialValue del isPlaying en TRUE, y este useEffect
  // useEffect(() => {
  //   if (isPlaying && audioRef.current) audioRef.current.play();
  // },[isPlaying])

  /// esto junto con el audioRef pódeis meterlo en un custom Hook si queréis (usePlay), porque lo utilizaréis más veces. No lo hago por no liar
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
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

  /// lo mismo con esta función, metedla en una carpeta de utils/globals para limpiar el código. Lo dejo aquí para que os sea más fácil entederlo. Explicación-> Simplemente coges la duraciónm, que te la dan en segundos, y la separas en minutos y segundos.
  const getSongDuration = (audioRef: React.RefObject<HTMLAudioElement>, setSongDuration: React.Dispatch<React.SetStateAction<string>>) => {
    if (audioRef.current && audioRef.current.duration) {
      const duration = audioRef.current?.duration
      const minutes = Math.floor(duration / 60)
      const seconds = Math.floor(duration % 60).toString().padStart(2, '0')
      setSongDuration(`${minutes}:${seconds}`)
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

  /// Esta función sirve para formatear el currentTime, recibe el currentTime por parametro y lo formatea en min y sec para enseñarlo en la pantalla. LO MISMO, esto, idealmente, en UTILS/GLOBALS, no aquí
  // const formatTime = (timeInSeconds: number): string => {
  //   const minutes = Math.floor(timeInSeconds / 60);
  //   const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
  //   return `${minutes}:${seconds}`;
  // };

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
  // useEffect(() => {
  //   const handleLoadedMetadata = () => {
  //     getSongDuration(audioRef, setSongDuration)
  //   };

  //   if (audioRef.current) {
  //     audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
  //     audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
  //     return () => {
  //       audioRef.current?.removeEventListener('loadedmetadata', handleLoadedMetadata);
  //       audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
  //     };
  //   }
  // }, []);

  return (
      <>
        <SongDetails song={queryTrack.data} />
        {/* <audio ref={audioRef} src={song.url} /> */}
        <h1>Song</h1>
        <div className="progress-bar" onClick={handleProgressClick}>
          <div className="progress" style={{ width: progressWidth }}></div>
          <div className="progress-indicator" style={{ left: progressWidth }}></div>
        </div>
        <div className="duration-container">
          {/* <span>{formatTime(currentTime)}</span> */}
          <span>{songDuration}</span>
        </div>
        <PlayButtons toggleMute={toggleMute} togglePlay={togglePlay} isPlaying={isPlaying} isMuted={isMuted} />
      </>
  )
}
