import { useRef, useState } from 'react'
import { Track } from '../../types/data'
import { PlayButtons } from './components/playButtons'
import { SongDetails } from './components/songDetails'
import './songPage.css'

type Props = {
  song: Track
}

export const SongPage = ({song}: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <>
      <SongDetails song={song} />
      <audio ref={audioRef} src={song.url} />
      <div className="progress-bar">
        <div className="progress" id="progress"></div>
        <div className="progress-indicator" id="progress-indicator"></div>
      </div>
      <PlayButtons togglePlay={togglePlay} isPlaying={isPlaying} />
    </>
  )
}