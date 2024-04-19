/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from 'react'
import { type User } from '../../types/data'
import './ConfigPage.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { Modal } from '../../components/modal'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  user: User
}

export const ConfigPage = ({ user }: Props) => {
  const {logout} = useAuth0()
  const [openModal, setOpenModal] = useState(false);

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
              src={user?.picture}
              alt="profile-pic"
            />
            <div className='configpage-user-text'>
              <h3>
                 {user?.given_name} {user?.family_name}
              </h3>
              <p>{user?.email}</p>
            </div>
          </div>

          <Link to='/profile'>
            <button className='configpage-btn'>
              <i className='fa-solid fa-chevron-right'></i>
            </button>
          </Link>
        </div>
        <div className='configpage-menu'>
          <p>View Profile</p>
          <p
            className='configpage-password-change-title'
            
          >
            Change Password
          </p>
          <Toaster/>
          <p
            className='configpage-profile-change'
            onClick={toggleProfileChange}
          >
            Change Profile Info
          </p>
          {openModal && <Modal onOpen={setOpenModal}>
            <form action="
            "></form>
    
          </Modal>}
        </div>
      </section>
      <section className='configpage-logout'>
        <button onClick={() =>  logout() } className='configpage-logout-btn'>
          Logout
        </button>
      </section>
    </>
  )
}
