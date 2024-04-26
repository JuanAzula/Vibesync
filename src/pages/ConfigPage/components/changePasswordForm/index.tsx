import {useForm} from 'react-hook-form'
import './changePasswordForm.css'
import { User } from '../../../../types/data';

type Props = {
  user: User
}

export const ChangePasswordForm = ({user}: Props) => {
  const {register} = useForm();
  
  return (
    <form className='configpage-password-form'>
      <label id='old-password'>Old Password</label>
        <input
          className='configpage-input'
          type='password'
        />
      <label>
        New Password
        <input
          type='password'
          className='configpage-input'
        />
      </label>
      <button
        className='configpage-save-btn'
      >
        Save
      </button>
    </form>
  )
}

