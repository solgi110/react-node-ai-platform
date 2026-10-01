import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { featers } from '../data/data'
import { btnHeadersData } from '../data/data'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'
import { useLogout } from '../authServices/loginForm'
import { useRef } from 'react'
import { headerAnimation } from '../Gsap/gsap'
const HeadersWrapper = styled.div`
  width: 90%;
  max-width: 2110px;
  height: 110px;
  background-color: none;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  z-index: 1000;
  margin-top: 5px;
`

const Head = styled.div`
  align-items: center;
  border-radius: 25px;
  position: fixed;
  z-index: 10000;
  max-width: 1300px;
  width: 90%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`
const Logo = styled.div`
  color: #ff0;
  width: 15%;
  display: flex;
  justify-content: right;
  cursor: pointer;
`
const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`
const LoginWrapper = styled.div`
  justify-content: center;
  display: flex;
  width: 20%;
  height: auto;
`
const BTN = styled.button`
  background-color: yellow;
  height: 30px;
  width: 50%;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease;
    box-shadow: 10px 10px 50px rgb(1171, 331, 99, 62);
  }
`
const Li = styled.li`
  z-index: 1000;
  color: #ffff;
  font-weight: 500;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transition: all 0.3s;
    color: #ffff;
  }
`
const Span = styled.span`
  color: #ffff;
`

export default function Headers() {
  const [isUser, setIsUser] = useState()
  const { logOuted } = useLogout()

  useEffect(() => {
    const { data: user, error } = supabase.auth.getUser()
    if (error) {
      console.log(error)
    }
    setIsUser(user?.id)

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_e, current) => {
      setIsUser(current?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  function logOut() {
    logOuted()
    setIsUser(null)
  }

  const navigate = useNavigate()

  const header = useRef()
  useEffect(() => {
    headerAnimation(header)
  }, [])
  return (
    <HeadersWrapper>
      <Head ref={header}>
        <Logo>WaklMe Learning</Logo>
        <Navbar className="nav">
          {btnHeadersData.map(btn => (
            <Li key={btn} className={btn === 'products' ? 'nav openmodal' : ''}>
              {btn}
              {btn === 'products' && (
                <div className="productNav">
                  <Span>pricing</Span>
                  <Span>all feathers</Span>
                  <Span> blog & info</Span>
                </div>
              )}
            </Li>
          ))}
        </Navbar>
        <LoginWrapper>
          {isUser ? (
            <BTN onClick={logOut}>Logout</BTN>
          ) : (
            <BTN onClick={() => navigate('/login')}> Login</BTN>
          )}
        </LoginWrapper>
      </Head>
    </HeadersWrapper>
  )
}
