// import { QueryClient, QueryClientProvider, useQuery, UseQueryResult } from 'react-query';
import './userPage.css'
// import { getUsers } from '../../services/tracksService'

type Props = {
  user: {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    profilePicture: string,
    isLoggedin: boolean
  }
}

//aqui le llega por props, por context o lo que sea el usuario.
export const UserPage = ({user}: Props) => {
  // const query = useQuery({
  //   queryKey: ['tracks'],
  //   queryFn: async () => await getUsers()
  // })

  // console.log(query.data)

  return (
    <>
      {/* {query.data && query.data[0] && ( */}
        <div className="user_container">
          <img src={user.profilePicture} alt="" />
          <h2>{user.first_name} {user.last_name}</h2>
        </div>
      {/* )} */}
    </>
  )
}