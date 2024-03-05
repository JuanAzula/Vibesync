import { type Track } from '../../types/data'
import './SongCard.css'
import { StyledLink } from '../../styledComponents/styledLink'
import { useAudioContext } from '../../hooks/useAudio'
import { useQuery } from '@tanstack/react-query'
import { getTrack as fetchTrack } from '../../services/dataService'

interface Props {
  track: Track,
  isActive?: boolean
}



const SongCard = ({ track, isActive }: Props) => {
  const getTrackInfo = (trackId: number) => {
    const { setAudioUrl } = useAudioContext()
    const getTrack = async (trackId: number) => {
      console.log(trackId)
      if (trackId) {
        const track = await fetchTrack(trackId)
        console.log('track', track.url)
        setAudioUrl(track.url)
        return track
      }
    }
    const queryTrack = useQuery({
      queryKey: ['track'],
      queryFn: async () => await getTrack(trackId)
    })
  
  }
  
  return (
    <div className="songcard-container" onClick={()=>{getTrackInfo(track.id)}}>
      {/* <StyledLink to={`/tracks/${track.id}`}> */}
      <img className="songcard-img" src={track.thumbnail} />
      <div className="songcard-track-info">
        <h3>{track.name}</h3>
        {isActive && <p>{track.artist}</p>}
      </div>
      {/* </StyledLink> */}
    </div>
  )
}

export default SongCard
