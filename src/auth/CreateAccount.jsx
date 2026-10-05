import React from 'react'
import styled from 'styled-components'
import { Outlet, useNavigate } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import flower from '../assets/flowers.jpg'

const Container = styled.div`
  position: relative;
  padding: 2px;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: stretch;
  border: 3px solid;
  border-image: linear-gradient(90deg, red, blue, lime, white, black) 1;
`
const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const CreateBox = styled.div`
  width: 50%;
  height: 100%;
`

const Span = styled.span`
  position: absolute;
  right: 10px;
  top: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
export default function CreateAccount() {
  const navigate = useNavigate()

  return (
    <Container>
      <Span onClick={() => navigate('/home')}>
        <IoClose />
      </Span>
      <ImageContainer>
        <Img src={flower} alt='Image'/>
      </ImageContainer>

      <CreateBox>
        {/* when we called login or signin 
        it schuld rendecr this compomnnet
         cause it is its child */}
        <Outlet />
      </CreateBox>
    </Container>
  )
}
