import {useForm} from 'react-hook-form'
import './changePasswordForm.css'
import { User } from '../../../../types/data';
import { UserService } from '../../../../services/UserService';

type Props = {
  user: User
}

export const ChangePasswordForm = ({user}: Props) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (Object.keys(errors).length === 0) {
      const userId = user.id;
      const id = 'userId';
      data[id] = userId;
      const response = await UserService.patchPassword(data);
      console.log(response)
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
      <button className='configpage-save-btn'>Save</button>
    </form>
  )
}

