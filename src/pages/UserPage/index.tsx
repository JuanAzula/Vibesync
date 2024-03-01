import './userPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../types/data';


type Props = {
  user: User
}

//aqui le llega por props, por context o lo que sea el usuario.
export const UserPage = ({user}: Props) => {

  return (
    <>
      {/* {query.data && query.data[0] && ( */}
      <div className="user_container">
        <img src={user.profilePicture} alt="" />
        <h2 className='user_name'>{user.first_name} {user.last_name}</h2>
      </div>
      {/* )} */}
      <FontAwesomeIcon className='back_button' icon={faArrowLeft} />
    </>
  )
}