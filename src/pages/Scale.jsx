import React from 'react'
import styled from 'styled-components'
import Button from '../auth/Button'
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  height: 80%;
`
const H1 = styled.h1`
  width: 70%;
  text-align: center;
  line-height: 2.5rem;
  font-size: 40px;
  font-family: serif;
  font-weight: 600;
`
const P = styled.p`
  font-size: 22px;
  text-align: center;
  font-family: serif;
  padding-bottom: 2rem;
  width: 90%;
`

const ButtonContainer = styled.div`
  width: 60%;
  height: 40px;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`
 export const Btn = styled.button`
  width: 47%;
  border-radius: 10px;
  height: 40px;
  background-color: yellow;
  padding: 4px;
  cursor: pointer;
  opacity: 0.7;
  font-size: 17px;

  &:hover {
    opacity: 1;
    transition: all 0.3s ease-in-out;
    transform: translateY(-3px);
    box-shadow: 10px 10px 50px rgb(1171, 331, 99, 62);
  }
`

export default function Scale() {
  return (
    <InfoSection>
      <H1> if you want to learn about How Gsap work , please look at my Sources </H1>
      <P>
        {' '}
        programming ist just about pushing your self to whole chalenge with all othe programmers ,
        if you want to get victori than try it as every day
      </P>

      <ButtonContainer>
        <Btn>Sources</Btn>
        <Btn>See Live</Btn>
      </ButtonContainer>
    </InfoSection>
  )
}
