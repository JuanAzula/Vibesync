import Skeleton from 'react-loading-skeleton'
import './CardSkeleton.css'

const CardSkeleton = ({ cards }: { cards: any }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) =>
    <div className="card-skeleton" key={index}>
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
