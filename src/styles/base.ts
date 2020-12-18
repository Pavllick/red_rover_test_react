import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, textarea {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${({ theme }) => (theme as any).default_font_size};
  }

  body {
    background-color: ${({ theme }) => (theme as any).bg.default};
  }

  a,
  p,
  input,
  textarea,
  select,
  li,
  button,
  label,
  div,
  span {
     font-size: 1.4rem;
     color: ${({ theme }) => (theme as any).text.default};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => (theme as any).text.default};
  }

  h1 {
    font-size: 3.4rem;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`
