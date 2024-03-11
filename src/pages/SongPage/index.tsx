import { SongDetails } from './components/songDetails'
import './songPage.css'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getTrack as fetchTrack } from '../../services/dataService'
import { useAudioContext } from '../../hooks/useAudio'

interface Props {
  trackId: string
  setAudioUrl: (arg0: string) => void
}

const getTrack = async (trackId: Props['trackId'], setAudioUrl: Props['setAudioUrl']) => {
  if (trackId) {
    const track = await fetchTrack(trackId)
    setAudioUrl(track.url)
    return track
  }
}

export const SongPage = () => {
  const { setAudioUrl } = useAudioContext()

  const { trackId } = useParams()

  if (!trackId) return null

  const queryTrack = useQuery({
    queryKey: ['track'],
    queryFn: async () => await getTrack(trackId, setAudioUrl)
  })

  return (
      <>
        <SongDetails song={queryTrack.data ? queryTrack.data : {}} />
      </>
  )
}
