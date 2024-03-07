import { useAudioContext } from '../../hooks/useAudio'
import { PlayButtons } from '../../pages/SongPage/components/playButtons'
import { StyledLink } from '../../styledComponents/styledLink'
import './MiniPlayer.css'

export const MiniPlayer = () => {
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
    audioImg,
    trackId
  } = useAudioContext()
  const track = JSON.parse(localStorage.getItem('localTrack'))

  return (
    <main className="mini-player-container">
        <audio src={audioUrl} ref={audioRef}></audio>
        <div className="progress-bar" onClick={handleProgressClick}>
          <div className="progress" style={{ width: progressWidth }}></div>
          <div className="progress-indicator" style={{ left: progressWidth }}></div>
        i</div>
        <div className="duration-container">
          <span>{formatTime(currentTime)}</span>
          <span>{songDuration}</span>
        </div>
        <StyledLink to={`tracks/${trackId}`}>
        <img src={audioImg} className='mini-player-img' />
        </StyledLink>
        <PlayButtons
          toggleMute={toggleMute}
          togglePlay={togglePlay}
          isPlaying={isPlaying}
          isMuted={isMuted}
          track={track}
          />
    </main>
  )
}
