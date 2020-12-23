import styled from 'styled-components'

export const Inline = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 80rem;
  width: 100%;
  padding: 2rem 2rem;
  margin: auto;

  & > * {
    width: 100%;
    margin-top: 4rem;
  }

  h1, & > span {
    text-align: center;
    font-weight: 500;
    width: auto;
    margin-top: 1rem;
  }

  & > span {
    color: ${({ theme }) => theme.placeholder_color};
    font-size: 1.6rem;
    margin-bottom: 4rem;
  }
`
