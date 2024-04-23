import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './cardInline.css'
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Track } from '../../../../types/data'
import { useAudioContext } from '../../../../hooks/useAudio'
import { useQuery } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { getTrack as fetchTrack } from '../../../../services/dataService'

type Props = {
  track: Track
  menuSwitchTrigger: Dispatch<SetStateAction<boolean>>;
  menuSwitch: boolean
}

export const CardInLine = ({track, menuSwitchTrigger, menuSwitch} : Props) => {
  const { setAudioUrl, setAudioImg, trackId, setTrackId, setIsPlaying, getSongDuration, audioRef, setSongDuration } = useAudioContext()

  const getTrack = async (trackId: string | undefined) => {
    if (trackId) {
      const track = await fetchTrack(trackId)
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
    //AQUÍ SE HACE LA PETICIÓN PARA AÑADIR LA CANCIÓN AL ARRAY DE USUARIO DE FAVSONGS
  }

  const handleSwitch = () => {
    if (menuSwitch) menuSwitchTrigger(false)
    else menuSwitchTrigger(true)
  }

  return (
    <div className="song-in-line-container">
    <img className='song-pic' src={track.thumbnail} alt="" onClick={() => {
    setTrackId(track.id)
    setIsPlaying(false)
    setTimeout(() => {
      void queryTrack.refetch()
    }, 90)
  }}/>
    <div className="song-detail">
      <span>{track.name}</span>
      <span>{track.artist}</span>
    </div>
      <span>'El Mejor Album de la Historia'</span>
      <span>'CREATED AT'</span>
      <span>'DURATION'</span>
      <FontAwesomeIcon className='icon-of-song' icon={faHeart} onClick={request} />
      <FontAwesomeIcon className='icon-of-song songMenuIcon' onClick={handleSwitch} icon={faEllipsis} />
  </div>
  )
}