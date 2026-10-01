import React from 'react'
import styled from 'styled-components'
import { videos } from '../data/data'

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
export default function VideoSlide({ activeIndex }) {
  return (
    <>
      <Video key={activeIndex} src={videos[activeIndex].src} autoPlay muted loop playsInline />
    </>
  )
}
