import React from 'react'
import styled from 'styled-components'
const BTN = styled.span`
  width: 80%;
  display: flex;

  height: 10%;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  background-color: none;
  color: yellow;
  cursor: pointer;
  margin-top: 1rem;
  padding: 5px;
  text-align: center;

  &:hover {
    border: 1px solid yellow;
    transition: all 0.3 ease;
    border-radius: 20px;
   }
`
export default function CardButton({ children }) {
  return <BTN>{children}</BTN>
}
