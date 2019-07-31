import { FunctionComponent } from 'react'
import styled from 'styled-components'

const CardGridComponent = styled.div`
  display: grid;
  grid-template-columns: 100%;

  @media (min-width: 940px), print {
    grid-gap: var(--default-padding);

    ${({ numOfCells }: ICardGridsProps) => numOfCells === 2 && `grid-template-columns: 1fr 1fr;`}
    ${({ numOfCells }: ICardGridsProps) => numOfCells === 3 && `grid-template-columns: repeat(3, 1fr);`}
    ${({ numOfCells }: ICardGridsProps) => numOfCells === 4 && `grid-template-columns: repeat(4, 1fr);`}
  }
`

interface ICardGridsProps {
  numOfCells?: number
}

export const CardGrid: FunctionComponent<ICardGridsProps> = ({ children, numOfCells = 1 }) => (
  <CardGridComponent numOfCells={numOfCells}>{children}</CardGridComponent>
)
