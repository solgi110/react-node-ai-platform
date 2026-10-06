import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { textAnimation } from '../Gsap/gsap'
import Mainsection from './Mainsection'
import Feathers from './Feathers'
import VideoSlide from './VideoSlide'
import Cardstep from './Cardstep'
import { cards, teamInfo } from '../data/data'
import Pagination from './Pagination'
import TeamInfo from './TeamInfo'
import Gsap from './Gsap'
import Footer from '../components/Footer'
import { FooterLayout } from '../apps/AppLayout'
import { useOutletContext } from 'react-router-dom'

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin: 0 auto;
  max-width: 1100px;
  width: 95%;
  align-items: center;
  height: auto;
  justify-content: start;
  padding-bottom: 10rem;
  overflow: hidden;
  box-sizing: border-box;
`
const TextWrapper = styled.div`
  display: flex;
  margin-top: 0 auto;
  width: 70%;
  text-align: center;
`
const BigTag = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  font-family: monospace;
  font-size: 36px;
  font-style: normal;
  font-family:
    Poppins Medium,
    sans-serif;
  font-weight: 600;
  overflow-y: hidden;
  /* overflow: hidden; */
  height: 3.1rem;
  padding-bottom: 2rem;
`
const Centrel = styled.div`
  z-index: 1000;
  width: 80%;
  height: auto;
  text-align: center;
  font-weight: 400;
  font-size: larger;
  overflow-y: hidden;
  background-color: transparent;

  & span {
    display: flex;
    width: 50%;
    justify-content: center;
    margin: 0 auto;
    font-size: 16px;
    height: 100%;
    overflow: hidden;
  }
`
const BTN = styled.button`
  margin-top: 2rem;
  border: none;
  position: relative;
  background-color: yellow;
  height: 30px;
  width: 15%;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease;
    box-shadow: 10px 10px 50px rgb(1171, 331, 99, 62);
  }
`
const MainContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  padding-top: 10rem;
  padding-bottom: 5rem;
  perspective: 1200px;
`
const FeathersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 5rem;
  width: 100%;
`
const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 420px;
  background: linear-gradient(to bottom, #001847, #011c63, #bdddfc);
  border-radius: 20px;
  box-shadow: 0px 40px 255px #100513;
`
const VideoCadr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 30px;
  width: 88%;
  height: 88%;
`
const CardSection = styled.div`
  width: 90%;
  height: 900px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 4rem;
`
const Div = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding-top: 10rem;
  height: 200px;
  flex-direction: column;
  & p {
    text-align: center;
    font-size: 16px;
    padding: 0;
    margin: 0;
  }
`
const Cards = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  transform: translatex(${({ $page }) => ($page === 1 ? '-100%' : '')});
  transition: all 0.6s ease;
`
export const Grid = styled.div`
  height: 100%;
  width: 100%;
  transform: scaleX(0.9);
  border-radius: 30px;
  background-color: #ffffff34;
  display: flex;
  flex: 0 0 calc(100% / 3);
  flex: 100 / 3;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &:hover {
    box-shadow: 10px 20px 80px rgb(0, 0, 0, 2);
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1000;
  }

  & p {
    padding: 10px;
    height: 50%;
  }
  & h1 {
    font-size: 22px;
    width: 100%;
    text-indent: 20px;
  }
`

const AnimationContainer = styled.div`
  width: 90%;
  height: 900px;
  padding-bottom: 5rem;
`

const FooterContainer = styled.div`
  width: 100%;
  height: 900px;
  background-color: #ffff0036;
`

const P = styled.p`
  /* height: 100%; */
  height: 5rem;
  margin: 0;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  padding: 0;
  overflow-y: hidden;
  scale: 0.9;

  @media (max-width: 715px) {
    font-size: 30px;
  }

  @media (max-width: 605px) {
    font-size: 25px;
  }
`

export default function Home() {
  const [activeIndex, setIndex] = useState(0)
  const [paginat, setPaginate] = useState(0)
  const [animation, setAnimation] = useState(0)
  const { viewPort, setViewPort } = useOutletContext()

  return (
    <HomeContainer $view={viewPort > 1000}>
      <TextWrapper className="Wrapper">
        <BigTag>
          <div className="One">
            <P> We build modern, scalable digital experiences. </P>
            <P> Turning ideas into powerful digital products. </P>
            <P> We develop solutions built for the future. </P>
            <P> From idea to scalable digital solution. </P>
          </div>
        </BigTag>
      </TextWrapper>
      <Centrel>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quisquam explicabo optio
          assumenda ipsam nemo sit incidunt .
        </span>
      </Centrel>

      <BTN>Products</BTN>

      <MainContainer>
        {/* Componnet */}
        <Mainsection />
      </MainContainer>
      <br />
      <FeathersContainer>
        {/* Componnent */}
        <Feathers setIndex={setIndex} activeIndex={activeIndex} />
      </FeathersContainer>

      <VideoContainer>
        <VideoCadr>
          {/* Componnet */}
          <VideoSlide setIndex={setIndex} activeIndex={activeIndex} />
        </VideoCadr>
      </VideoContainer>

      <CardSection>
        <Div>
          <h1> Purpose-built for your dream job</h1>
          <p>
            I am learning React and Node.js to build the career I have always wanted. Every project
            helps me improve my skills, solve real problems, and grow as a developer. My goal is to
            turn what I learn today into the work I want to do tomorrow.
          </p>
        </Div>
        <Cards $page={paginat}>
          {/* Componnets */}
          <Cardstep cards={cards} grid={Grid} />
        </Cards>
        <Pagination paginat={paginat} setPaginate={setPaginate} cards={cards} />
        {/* Pagination */}
      </CardSection>
      {/*  Componnet  */}
      <TeamInfo teamInfo={teamInfo} animation={animation} setAnimation={setAnimation} />

      <AnimationContainer>
        {/* Componnet */}
        <Gsap />
      </AnimationContainer>
    </HomeContainer>
  )
}
