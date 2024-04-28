import { Track } from '../../types/data'
import './songInLine.css'
import { SongMenu } from '../songMenu'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useAudioContext } from '../../hooks/useAudio'
import { useQuery } from '@tanstack/react-query'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons'
import { TracksService } from '../../services/TracksService'

type Props = {
  track: Track,
  menuSwitchTrigger: Dispatch<SetStateAction<number>>;
  menuSwitch: number
}

export const SongInLine = ({ track, menuSwitch, menuSwitchTrigger }: Props) => {
  const { setAudioUrl, setAudioImg, trackId, setTrackId, setIsPlaying, getSongDuration, audioRef, setSongDuration } = useAudioContext()
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const getTrack = async (trackId: string | undefined) => {
    if (trackId) {
      const track = await TracksService.getTrack(trackId)
      getSongDuration(audioRef, setSongDuration)
      setAudioUrl(track.url)
      setAudioImg(track.thumbnail)
      localStorage.setItem('localTrack', JSON.stringify(track))
      setTimeout(() => {
        setTrackId(0)
        void queryTrack.refetch()
      }, 90)
      return track
    } else {
      const track = JSON.parse(localStorage.getItem('localTrack') || '{}')
      setAudioUrl(track.url)
      setAudioImg(track.thumbnail)
      return track
    }
  }
  const queryTrack = useQuery({
    queryKey: ['track'],
    queryFn: async () => await getTrack(trackId)
  })

  useEffect(() => {
    const track = JSON.parse(localStorage.getItem('localTrack') || '{}')
    setTrackId(track.id)
  }, [])

  const request = () => {
    //HERE THE REQUEST FOR THE FAVORITES
  }

  const handleClick = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setClickPosition({ x: clientX, y: clientY });
    handleSwitch();
  };

  const handleSwitch = () => {
    if (menuSwitch === track.id) menuSwitchTrigger(0)
    else menuSwitchTrigger(track.id)
  };

  return (
    <div className="song-in-line-container">
      <img className='song-pic' src={track.thumbnail} alt="" onClick={() => {
        setTrackId(track.id)
        setIsPlaying(false)
        setTimeout(() => {
          void queryTrack.refetch()
        }, 90)
      }} />
      <div className="song-detail">
        <span>{track.name}</span>
        <span>{track.artist}</span>
      </div>
      <span>'El Mejor Album de la Historia'</span>
      <span>'CREATED AT'</span>
      <span>'DURATION'</span>
      <FontAwesomeIcon className='icon-of-song' icon={faHeart} onClick={request} />
      <FontAwesomeIcon className='icon-of-song songMenuIcon' onClick={handleClick as any} icon={faEllipsis} />
      {menuSwitch === track.id && <SongMenu clickPosition={clickPosition} track={track} />}
    </div>
  )
}

