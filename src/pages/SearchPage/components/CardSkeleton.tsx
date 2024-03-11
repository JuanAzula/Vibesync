import Skeleton from 'react-loading-skeleton'
import './CardSkeleton.css'

const CardSkeleton = ({ cards }: { cards: number }) => {
  return Array(cards)
    .fill(0)
    .map((i) =>
    <div className="card-skeleton" key={i}>
        <div>
            <Skeleton className="card-skeleton-img"/>
        </div>
        <div>
            <Skeleton className="card-skeleton-title" />
        </div>
    </div>
    )
}

export default CardSkeleton
