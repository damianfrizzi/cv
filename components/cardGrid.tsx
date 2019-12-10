import { FC } from 'react'
import styled from 'styled-components'
import { timelineItemMarginBottom } from './timeline'

const CardGridComponent = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-top: ${timelineItemMarginBottom};

  @media (min-width: 940px), print {
    grid-gap: ${({ theme }) => theme.spacing(3)};

    ${({ numOfCells }: ICardGridsProps) => numOfCells === 2 && `grid-template-columns: 1fr 1fr;`}
    ${({ numOfCells }: ICardGridsProps) => numOfCells === 3 && `grid-template-columns: repeat(3, 1fr);`}
    ${({ numOfCells }: ICardGridsProps) => numOfCells === 4 && `grid-template-columns: repeat(4, 1fr);`}
    ${({ numOfCells }: ICardGridsProps) => numOfCells === 'auto' && `grid-template-columns: auto auto;`}
  }
`

interface ICardGridsProps {
  numOfCells?: 1 | 2 | 3 | 4 | 'auto'
}

export const CardGrid: FC<ICardGridsProps> = ({ children, numOfCells = 1 }) => <CardGridComponent numOfCells={numOfCells}>{children}</CardGridComponent>
