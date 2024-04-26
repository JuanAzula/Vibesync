import { useState } from 'react'
import { type User } from '../../types/data'
import './ConfigPage.css'
import { Link, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Modal } from '../../components/modal'
import { ChangeProfileForm } from './components/changeProfileForm'
import { ChangePasswordForm } from './components/changePasswordForm'

interface Props {
  user: User
}

export const ConfigPage = ({ user }: Props) => {
  const [visible, setVisible] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState(user?.email || '');

  const navigate = useNavigate()
  const logout = () => {
    window.localStorage.removeItem('userLogged')
    navigate('/')
    window.location.reload()
  }

  const togglePasswordChange = () => {
    setVisible(!visible)
  }

  const toggleProfileChange = () => {
    setOpenModal(true)
  }

  return (
    <>
      <header className='configpage-header'>
        <Link to='/'>
          <button className='configpage-btn configpage-back'>
            <i className='fa-solid fa-chevron-left'></i>
          </button>
        </Link>
        <h2 className='configpage-title'>Profile</h2>
      </header>
      <section>
        <div className='configpage-user-info'>
          <div className='configpage-user-pic-and-name'>
            <img
              className='configpage-profile-pic'
              src={user?.image}
              alt="profile-pic"
            />
            <div className='configpage-user-text'>
              <p>{email}</p>
              <h3>{user.name}</h3>
            </div>
          </div>

          <Link to='/profile'>
            <button className='configpage-btn'>
              <i className='fa-solid fa-chevron-right'></i>
            </button>
          </Link>
        </div>
        <div className='configpage-menu'>
          <Link to='/profile'>
            <p>View Profile</p>
          </Link>
          <p
            className='configpage-password-change-title'
            onClick={() => { togglePasswordChange() }}
          >
            Change Password
          </p>
          <Toaster />
          {visible && (
            <ChangePasswordForm user={user} />
          )}
          <p
            className='configpage-profile-change'
            onClick={toggleProfileChange}
          >
            Change Profile Info
          </p>
          {openModal && <Modal onOpen={setOpenModal}>
            <ChangeProfileForm setEmail={setEmail} user={user} />
          </Modal>}
        </div>
      </section>
      <section className='configpage-logout'>
        <button onClick={() => { logout() }} className='configpage-logout-btn'>
          Logout
        </button>
      </section>
    </>
  )
}
