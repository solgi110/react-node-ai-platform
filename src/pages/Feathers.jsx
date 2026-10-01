import React, { useEffect } from 'react'
import styled from 'styled-components'
import { dataCards } from '../data/data'
import Login from '../auth/Login'

const Cards = styled.div`
  width: 90%;
  display: flex;
  height: auto;
  padding-bottom: 5rem;
  justify-content: space-around;
  cursor: pointer;
`
const Span = styled.span`
  display: flex;
  width: 90%;
  line-height: 20px;
  font-weight: 500;
  font-size: 16px;
  color: #f8f8f8;
  padding: 4px;
`
const Data = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
  border-left: ${({ $child }) => ($child ? '1px solid grey' : '')};
  border-right: ${({ $child }) => ($child ? '1px solid grey' : '')};
  padding-left: 5px;
`
const H2 = styled.h2`
  color: #ece6e6ad;
  font-weight: 500;
  font-size: 24px;
  opacity: 0.8;
  &:hover {
    transition: all 0.4s ease;
    opacity: 1;
    color: #ffff;
  }
`
export default function Feathers({ setIndex, activeIndex }) {
  useEffect(() => {
    const inteval = setInterval(() => {
      setIndex(prev => {
        if (prev >= 2) return 0
        return prev + 1
      })
    }, 10000)
    return () => clearInterval(inteval)
  }, [activeIndex])

  return (
    <Cards className="cards">
      {dataCards.map((data, index) => (
        <Data key={data.id} onClick={() => setIndex(prev => (prev = index))} $child={index === 1}>
          <div className="topline">
            <div className={activeIndex === index ? 'bar' : ''}></div>
          </div>
          <H2>{data.title}</H2>
          <Span>{data.text}</Span>
        </Data>
      ))}
    </Cards>
  )
}
