import React from 'react'
import styled from 'styled-components'
const Btn = styled.button`
  width: 40%;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #66ff00;
  color: black;
  border-radius: 15px;
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 0.7;
    transition: all 0.3s ease;
  }
`

export default function Button({ children }) {
  return <Btn>{children}</Btn>
}
