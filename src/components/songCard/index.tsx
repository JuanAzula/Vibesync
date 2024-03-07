import { type Track } from '../../types/data'
import './SongCard.css'
import { useAudioContext } from '../../hooks/useAudio'
import { useQuery } from '@tanstack/react-query'
import { getTrack as fetchTrack } from '../../services/dataService'

interface Props {
  track: Track
  isActive?: boolean
}

const SongCard = ({ track, isActive }: Props) => {
  const { setAudioUrl, setAudioImg, trackId, setTrackId } = useAudioContext()
  const getTrack = async (trackId: number | undefined) => {
    console.log(trackId)
    if (trackId) {
      const track = await fetchTrack(trackId)
      console.log('track', track.url)
      setAudioUrl(track.url)
      setAudioImg(track.thumbnail)
      localStorage.setItem('localTrack', JSON.stringify(track))
      setTimeout(() => {
        setTrackId(0)
        void queryTrack.refetch()
      }, 50)
      return track
    } else {
      const track = JSON.parse(localStorage.getItem('localTrack') || '{}')
      console.log('track', track.url)
      setAudioUrl(track.url)
      setAudioImg(track.thumbnail)
      return track
    }
  }
  const queryTrack = useQuery({
    queryKey: ['track'],
    queryFn: async () => await getTrack(trackId)
  })

  console.log('queryTrack', queryTrack.data)
  console.log(trackId)
  return (
    <div className="songcard-container" onClick={() => {
      setTrackId(track.id)
      setTimeout(() => {
        void queryTrack.refetch()
      })
    }}>
      <img className="songcard-img" src={track.thumbnail} />
      <div className="songcard-track-info">
        <h3>{track.name}</h3>
        {isActive && <p>{track.artist}</p>}
      </div>
    </div>
  )
}

export default SongCard
