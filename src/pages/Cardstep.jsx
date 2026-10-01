import { Grid } from './Home'
import styled from 'styled-components'
import CardButton from './CardButton'

const Span = styled.span`
  font-size: 26px;
  padding-top: 30px;
  color: white;
  display: flex;
`
export default function Cardstep({ cards }) {
  return (
    <>
      {cards.map(card => {
        const Icon = card.icon

        return (
          <Grid key={card.id}>
            <Span>
              <Icon fontSize={28} />
            </Span>
            <h1>{card.title} </h1>
            <p>{card.text}</p>
            <CardButton>{card.btn}</CardButton>
          </Grid>
        )
      })}
    </>
  )
}
