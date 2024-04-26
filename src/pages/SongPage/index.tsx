import { SongDetails } from './components/songDetails'
import './songPage.css'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAudioContext } from '../../hooks/useAudio'
import { TracksService } from '../../services/TracksService'

interface Props {
  trackId: string
  setAudioUrl: (arg0: string) => void
}

const getTrack = async (trackId: Props['trackId'], setAudioUrl: Props['setAudioUrl']) => {
  if (trackId) {
    const track = await TracksService.getTrack(trackId)
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
