// import './styles/App.css'
// import { useQuery } from '@tanstack/react-query'
// import { getTracks } from './services/dataService'
import { AppRoutes } from './router/AppRoutes'
import { Login } from './pages/Login'
// import { Home } from './pages/Home'
// import { useNavigate } from 'react-router-dom'

const getUser = () => {
  const loggedUserJSON = window.localStorage.getItem('userLogged')
  console.log('user', loggedUserJSON)
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    return user
  }
}

export const App = () => {
  const query = useQuery({
    queryKey: ['tracks'],
    queryFn: async () => await getTracks()
  })

//   console.log(query.data)

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

// export default App
