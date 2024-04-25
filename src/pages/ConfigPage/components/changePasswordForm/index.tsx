
import './changePasswordForm.css'
import { User } from '../../../../types/data';

type Props = {
  user: User
}

export const ChangePasswordForm = ({user}: Props) => {

  
  return (
    <form className='configpage-password-form'>
      <label>
        {' '}
        Old Password
        <input
          className='configpage-input'
          type='password'
        />
      </label>
      <label>
        {' '}
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

