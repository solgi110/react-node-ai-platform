import React from 'react'
import styled from 'styled-components'
import { aiOptions } from '../../data/data'

const Settings = styled.div`
  width: 40%;
  height: 100%;
  border-right: 1px dotted grey;
  color: black;
  display: flex;
  padding-left: 0.5rem;
  flex-direction: column;
  background-color: #ffff;
  padding: 0.5rem;
  overflow: hidden;
  box-sizing: border-box;
`
const Span = styled.span`
  height: 70%;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transition: all 0.4s ease;
  }
`

export default function Options() {
  return (
    <Settings>
      {aiOptions?.map(ai => {
        const Icon = ai.icon
        return (
          <Span key={ai.id}>
            <Icon fontSize={24} /> {ai.title}
          </Span>
        )
      })}
    </Settings>
  )
}
