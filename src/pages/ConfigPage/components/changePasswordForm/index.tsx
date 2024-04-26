import {useForm} from 'react-hook-form'
import './changePasswordForm.css'
import { User } from '../../../../types/data';
import { UserService } from '../../../../services/UserService';
import { Dispatch, SetStateAction, useState } from 'react';
import {toast} from 'sonner'

type Props = {
  user: User
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export const ChangePasswordForm = ({user, visible, setVisible}: Props) => {
  const [wrongPasswordMessage, setwrongPasswordMessage] = useState(false)
  const {register, handleSubmit, formState: {errors}, reset} = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (Object.keys(errors).length === 0) {
      const userId = user.id;
      const id = 'userId';
      data[id] = userId;
      const response = await UserService.patchPassword(data);
      if (!response) setwrongPasswordMessage(true)
      else {
        setVisible(!visible)
        toast.success('Your profile information has been updated')
      }
      reset()
    }
  })
  
  return (
    <form onClick={onSubmit} className='configpage-password-form'>
      <label id='old-password'>Old Password</label>
        <input
          className='configpage-input'
          type='password'
          {...register('password', {
            required: {
              value: true,
              message: "Password is required"
            }
          })}
        />
      <label>New Password</label>
        <input
          type='password'
          className='configpage-input'
          {...register('newPassword', {
            required: {
              value: true,
              message: "Password is required"
            }
          })}
        />
        {wrongPasswordMessage && <span>Wrong password</span>}
      <button className='configpage-save-btn'>Save</button>
    </form>
  )
}

