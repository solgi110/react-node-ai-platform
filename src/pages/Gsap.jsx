import React, { Component, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { buildingSection } from '../Gsap/gsap'
import Scale from './Scale'
const GsapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 20px;
`
const ImageData = styled.div`
  border-radius: 20px;
  display: flex;
  margin: 0 auto;
  width: 98%;
  height: 98%;
  background: linear-gradient(rgba(16, 9, 44, 0.473));
`

export default function Gsap() {
  const dataRef = useRef()
  useEffect(() => {
    return buildingSection(dataRef)
  }, [dataRef])

  return (
    <GsapContainer>
      <ImageData ref={dataRef}>
        {/* <Component */}
        <Scale />
      </ImageData>
    </GsapContainer>
  )
}
