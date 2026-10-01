import styled from 'styled-components'
import PaginationButton from './PaginationButton'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaAngleDoubleLeft } from 'react-icons/fa'

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  padding-top: 1rem;
  z-index: 10000;
  color: aliceblue;
`
const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: grey;
  background-color: ${({ $active }) => ($active ? 'white' : 'grey')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default function Pagination({ setPaginate, cards, paginat }) {
  const pageItem = 3
  const pages = Math.floor(cards.length / pageItem)

  return (
    <PaginationContainer>
      <PaginationButton>
        <FaAngleDoubleLeft onClick={() => setPaginate(0)} />
      </PaginationButton>
      {Array.from({ length: pages }).map((_, index) => {
        return (
          <Dot key={index} onClick={() => setPaginate(index)} $active={index === paginat}></Dot>
        )
      })}
      <PaginationButton>
        <FaAngleDoubleRight onClick={() => setPaginate(1)} />
      </PaginationButton>
    </PaginationContainer>
  )
}
