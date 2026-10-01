import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import styled from 'styled-components'
import { useUpdateUser } from '../authServices/loginForm'
import Button from './Button'

const ConfirmPasswords = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to left, #ff0000, #00b224, #ba33fd);
`
const H1 = styled.h1`
  text-align: center;
  font-size: 33px;
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
export default function ConfirmPassword() {
  const method = useForm()
  const { mutate, isPending } = useUpdateUser()
  function confirmPass(data) {
    mutate(data)
    method.reset()
    toast.success('Password is updated !')
  }

  ///Validate the Confirm password
  const newpass = method.watch('newPass')
  return (
    <ConfirmPasswords onSubmit={method.handleSubmit(confirmPass)}>
      <H1>New Password</H1>

      <Inputs
        type="password"
        placeholder="New Password .."
        {...method.register('newPass', { required: true })}
      />
      <Inputs
        type="password"
        placeholder="Confirm Password"
        {...method.register('confirm_Pass', {
          required: true,
          validate: value => value === newpass || 'Password Do Not Matches !'
        })}
      />
      <Button type="submit" disabled={isPending}>
        {isPending ? 'Updating ..' : ' Update'}
      </Button>
    </ConfirmPasswords>
  )
}
