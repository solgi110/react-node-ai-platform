import React, { useEffect } from 'react'
// import teamImage from '../assets/teamImage.jpg '
import styled, { keyframes } from 'styled-components'
import team from '../assets/team.jpg'

const Container = styled.div`
  width: 90%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  overflow: hidden;
  padding-bottom: 200px;
`
const TeamContainer = styled.div`
  width: 47%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const Imagge = styled.div`
  width: 47%;
  height: 100%;
  background-color: transparent;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 4px;
  width: 100%;
  position: relative;

  &::before,
  &::after {
    content: '';
    width: 100%;
    top: 100%;
    max-width: 100%;
    bottom: 0;
    height: 0.5px;
    position: absolute;
    overflow: hidden;
  }

  &::after {
    content: '';
    width: 100%;
    position: absolute;
    height: 2px;
    animation: ${({ $active }) => ($active ? `anime 7s linear ` : '')};
    background-color: ${({ $active }) => ($active ? 'lime' : 'grey')};

    @keyframes anime {
      to {
        transform: translateX(100%);
      }
    }
  }
`

const IconBox = styled.div`
  display: flex;
  max-width: max-content;
  font-size: 25px;
  padding: 0;
  margin: 0;
  color: yellow;
  margin-top: 10px;
  padding-left: 5px;
`
const H1 = styled.h1`
  margin: 0;
`
const ElemntBox = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
`
// this is the animation
const P = styled.p`
  margin-bottom: 0;
  margin-top: 5px;
  height: ${({ $active }) => ($active ? '100%' : '0')};
  overflow: ${({ $active }) => ($active ? '' : 'hidden')};
  transition: all 0.1s forward;
`

export default function TeamInfo({ teamInfo, animation, setAnimation }) {
  const IndexofData = teamInfo.length - 1

  useEffect(() => {
    const intervale = setInterval(() => {
      setAnimation(prev => {
        if (prev >= IndexofData) return 0
        return prev + 1
      })
    }, [7000])
    return () => clearInterval(intervale)
  }, [])

  return (
    <Container>
      <TeamContainer>
        {teamInfo.map((team, index) => {
          const Icon = team.icon
          return (
            <Item key={team.id} $active={index === animation}>
              <IconBox>
                <Icon fontSize={30} />
              </IconBox>

              <ElemntBox>
                <H1>{team.title}</H1>
                <P $active={index === animation}>{team.text} </P>
              </ElemntBox>
            </Item>
          )
        })}
      </TeamContainer>

      <Imagge>
        <Img src={team} alt="TeamFoto" />
      </Imagge>
    </Container>
  )
}
