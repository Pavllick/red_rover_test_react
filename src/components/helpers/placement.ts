import styled from 'styled-components'

export const EqInline = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  & > * {
    flex-grow: 1;
    flex-basis: 0;

    margin-right: 0.75rem;
    margin-left: 0.75rem;
  }

  & > *:first-child {
    margin-left: 0;
  }

  & > *:last-child {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    & > * {
      flex-basis: 100%;
      
      width: 100%;
      margin: 0;
      margin-bottom: 2.5rem;
    }
  }
`
