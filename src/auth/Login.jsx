import styled from 'styled-components'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useLogin } from '../authServices/loginForm'
import toast from 'react-hot-toast'

const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to left, #ff0000, #00b224, #ba33fd);
`
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
`
const Inputs = styled.input`
  width: 75%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  text-indent: 15px;
  margin-bottom: 3rem;
  border-radius: 15px;
  box-shadow: 0px 10px 40px;
`

const H1 = styled.h1`
  text-align: center;
  font-size: 33px;
`

export default function Login() {
  const form = useForm()
  const { login } = useLogin()
  async function handleForm({ email, password }) {
    try {
      await login(email, password)
      navigate('/home')
      toast.success('Login Successfuly !')
    } catch (error) {
      toast.error('Invalid Email or password !')
    }
    form.reset()
  }
 
  const navigate = useNavigate()
  return (
    <>
      <LoginForm onSubmit={form.handleSubmit(handleForm)}>
        <InputContainer>
          <H1>Login</H1>
          <Inputs
            type="text"
            placeholder="Your Email Address .."
            {...form.register('email', { required: true })}
          />
          <Inputs
            type="password"
            placeholder="Password .."
            {...form.register('password', { required: true })}
          />
        </InputContainer>
        <Button type="submit"> Login</Button>

        <a onClick={() => navigate('/signup')}>create on account</a>
        <a onClick={() => navigate('/new_password')}> forgot your Password ? </a>
      </LoginForm>
    </>
  )
}
