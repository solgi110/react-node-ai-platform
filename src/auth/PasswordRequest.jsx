import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import Button from './Button'
import { useResetPassword } from '../authServices/loginForm'

const EmailContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to left, #ff0000, #00b224, #ba33fd);
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

export default function PasswordRequest() {
  const navigate = useNavigate()
  const recovery = useForm()

  const { isPending, mutate } = useResetPassword()

  async function RecoveryFunction(email) {
    mutate(email)
    recovery.reset()
  }

  return (
    <EmailContainer onSubmit={recovery.handleSubmit(RecoveryFunction)}>
      <H1>Password Recovery </H1>
      <Inputs
        type="email"
        placeholder="Your Email ..."
        {...recovery.register('email', { required: true })}
      />
      <Button type="submit" disabled={isPending}>
        {isPending ? 'Sending ..' : 'Send'}
      </Button>
      <a onClick={() => navigate('/login')}>Login ? </a>
    </EmailContainer>
  )
}
