import React from 'react'
import styled from 'styled-components'
const Button = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  background-color: none;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  font-size: 30px;
  border: none;
  &:hover {
    scale: 1.1;
    transition: all 0.3s ease;
  }
`

export default function PaginationButton({ children }) {
  return <Button>{children}</Button>
}
