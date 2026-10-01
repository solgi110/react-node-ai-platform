import React, { useEffect } from 'react'
import styled from 'styled-components'
import mixkit from '../assets/mixkit.mp4'
import { useRef } from 'react'
import { textAnimation } from '../Gsap/gsap'

const Container = styled.section`
  width: 100%;
  box-sizing: border-box;
  height: auto;
  display: flex;
  flex-direction: column;

`
const Video = styled.video`
  width: 100%;
  height: 600px;
  border-radius: 10px;
  object-fit: cover;
  padding-bottom: 7rem;
  height: 100%;
`
const Span = styled.span`
  width: 90%;
  display: flex;
  margin: 0 auto;
  font-size: 25px;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  line-height: 2rem;
`
export default function Mainsection() {
  const refVideo = useRef()
  // useEffect(() => {
  //   textAnimation(refVideo)
  // }, [])

  return (
    <Container ref={refVideo}>
      <Video src={mixkit} autoPlay={true} loop={true} muted />

      <Span>
        Man Mostafa Solgi hastam the best proggrammer ever in Deutchland, If you want to Chanlenge
        me , than let me know it before you fell in trap, best regards (M.S)
      </Span>
    </Container>
  )
}
