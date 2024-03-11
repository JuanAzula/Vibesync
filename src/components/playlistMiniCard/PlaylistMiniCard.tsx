import './PlaylistMiniCard.css'

interface Props {
  img: string
  title: string
}

export const PlaylistMiniCard = ({ img, title }: Props) => {
  return (
    <div className="playlist-minicard-container">
        <img className="playlist-minicard-img" src={img} />
        <p>{title}</p>
    </div>
  )
}
