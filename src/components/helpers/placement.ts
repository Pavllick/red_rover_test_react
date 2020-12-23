import styled from 'styled-components'

export const EqInline = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  & > * {
    display: flex;
    flex-grow: 1;

    margin-right: 0.75rem;
    margin-left: 0.75rem;
    margin-bottom: 2.5rem;
  }

  & > *:first-child {
    margin-left: 0;
  }

  & > *:last-child {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    & > * {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
`
