import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSignUp } from '../authServices/loginForm'
import toast from 'react-hot-toast'
const SigninContainer = styled.form`
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

export default function SigninPage() {
  const navigate = useNavigate()
  const formSignUp = useForm()
  const { isPending, mutate } = useSignUp()
  function handleSignin(data) {
    mutate(data)
    formSignUp.reset()
  }

  ///Validate the Confirm password
  const password = formSignUp.watch('password')

  return (
    <SigninContainer onSubmit={formSignUp.handleSubmit(handleSignin)}>
      <InputContainer>
        <H1>SignUp</H1>
        <Inputs
          type="text"
          placeholder="Your Name .."
          {...formSignUp.register('name', { required: true })}
        />
        <Inputs
          type="text"
          placeholder="Your Email Address .."
          {...formSignUp.register('email', { required: true })}
        />
        <Inputs
          type="password"
          placeholder="Password .."
          {...formSignUp.register('password', { required: true })}
        />
        <Inputs
          type="password"
          placeholder="Confirm Password .."
          {...formSignUp.register('confirm_password', {
            required: true,
            validate: value => value === password || 'password do not mathes !'
          })}
        />
      </InputContainer>
      <Button type="submit" disabled={isPending}>
        {isPending ? 'Sending' : 'Register'}
      </Button>

      <a onClick={() => navigate('/login')}> already have on account ?</a>
    </SigninContainer>
  )
}
