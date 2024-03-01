import styled from 'styled-components'

export const SignUpWrapper = styled.section`
  background-color: #121217;
  display: flex;
  max-width: 430px;
  height: 932px;
  width: 100%;
  flex-direction: column;
  color: #fff;
  font-weight: 700;
  letter-spacing: -0.27px;
  line-height: 53px;
  margin: 0 auto;
  padding: 50px 40px;
`

export const SignUpHeader = styled.header`
  font-feature-settings: "dlig" on;
  font-size: 58px;
  font-family: 'Be Vietnam Pro', sans-serif;
`

export const SignUpContent = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  white-space: nowrap;
  padding-top: 49px;
`

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`

export const FormLabel = styled.label`
  font-size: 0;
`

export const FormInput = styled.input`
  background-color: #9e9eb8;
  height: 51px;
  border: none;
  color: #fff;
  padding: 0 15px;
`

export const SubmitButton = styled.button`
  font-feature-settings: "dlig" on;
  border-radius: 38px;
  background-color: #ae61d2;
  color: #fff;
  justify-content: center;
  align-items: center;
  padding: 15px 60px;
  font-size: 22px;
  font-family: 'Be Vietnam Pro', sans-serif;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`

export const LoginPrompt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 22px;

  .light-text {
    font-weight: 200;
  }

  .login-link {
    text-decoration: underline;
    cursor: pointer;
  }
`
