import { Link } from 'react-router-dom'
import { FormBlock, FormInput, FormLabel, LoginPrompt, SignUpContent, SignUpHeader, SignUpWrapper, SubmitButton } from '../styledComponents/loginStyles'
// import { useQuery } from '@tanstack/react-query'
// import { getUsers as fetchUsers } from '../services/dataService'

interface LoginProps {
  triggerRefetch: () => void
}
export const Signo: React.FC<LoginProps> = ({ triggerRefetch }) => {
//   const userQuery = useQuery({
//     queryKey: ['user'],
//     queryFn: async () => await fetchUsers()
//   })
  return (
    <SignUpWrapper>
      <SignUpHeader>Sign up to start listening to content</SignUpHeader>
      <SignUpContent>
        <FormBlock role="form">
          <FormLabel htmlFor="emailInput" className="visually-hidden">Email:</FormLabel>
          <FormInput type="email" id="emailInput" placeholder="Enter your email" aria-label="Enter your email" />
          <FormLabel htmlFor="passwordInput" className="visually-hidden">Password:</FormLabel>
          <FormInput type="password" id="passwordInput" placeholder="Enter your password" aria-label="Enter your password" />
          <SubmitButton>Register</SubmitButton>
        </FormBlock>
        <LoginPrompt>
          <p className="light-text">Already have an account?</p>{' '}
          <p className="login-link"><Link to={'/login'}>
            Login here
            </Link>
            </p>
        </LoginPrompt>
      </SignUpContent>
    </SignUpWrapper>
  )
}
