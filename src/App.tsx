import './styles/App.css'
import { useQuery } from '@tanstack/react-query'
import { getTracks } from './services/tracksService'

export const App = () => {
  const query = useQuery({
    queryKey: ['tracks'],
    queryFn: async () => await getTracks()
  })

  console.log(query.data)

  return (
    <>
    <div>
      <h1>Tracks</h1>
      <ul>
        {query.data?.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
