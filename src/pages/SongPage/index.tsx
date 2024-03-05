import { PlayButtons } from './components/playButtons'
import { SongDetails } from './components/songDetails'
import './songPage.css'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getTrack as fetchTrack } from '../../services/dataService'
import { useAudioContext } from '../../hooks/useAudio'

const getTrack = async (trackId: string, setAudioUrl: any) => {
  console.log(trackId)
  if (trackId) {
    const track = await fetchTrack(trackId)
    console.log('track', track.url)
    setAudioUrl(track.url)
    return track
  }
}

export const SongPage = () => {
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
    audioUrl,
    setAudioUrl
  } = useAudioContext()

  const { trackId } = useParams()

  if (!trackId) return null

  const queryTrack = useQuery({
    queryKey: ['track'],
    queryFn: async () => await getTrack(trackId, setAudioUrl)
  })
  console.log('queryTrack', queryTrack.data?.url)

  return (
      <>
        <SongDetails song={queryTrack.data ? queryTrack.data : {}} />
        <audio ref={audioRef} src={audioUrl || {}} />
        <div className="progress-bar" onClick={handleProgressClick}>
          <div className="progress" style={{ width: progressWidth }}></div>
          <div className="progress-indicator" style={{ left: progressWidth }}></div>
        </div>
        <div className="duration-container">
          <span>{formatTime(currentTime)}</span>
          <span>{songDuration}</span>
        </div>
        <PlayButtons
          toggleMute={toggleMute}
          togglePlay={togglePlay}
          isPlaying={isPlaying}
          isMuted={isMuted}
          />
      </>
  )
}
