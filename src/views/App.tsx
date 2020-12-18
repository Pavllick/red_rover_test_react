import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/base'
import defaultTheme from '../styles/themes/default'

import { Section, Content } from './style'

import { InputText, TextArea } from '../components/Input';
import { RRTest } from 'src/models/RRTest';
import { EqInline } from 'src/components/helpers/placement';
// import { Item } from 'src/models/Item';

function App() {
  const [testStr, setTestStr] = useState<string>(
    '(id, name, email, type(id, name, customFields(c1, c2, c3), customFields2(c1, c6, c3)), externalId)'
    )
  const [result, setResult] = useState<string>()
  const [resultSorted, setResultSorted] = useState<string>()
  const [errorMsg, setErrorMsg] = useState<string>()

  useEffect(() => {
    const res = new RRTest().parse(testStr)

    if(res) {
      setResult(res.toString())
      setResultSorted(res.sort().toString())
      setErrorMsg(undefined)
    } else {
      const error = 'Invalid Input'

      setResult(error)
      setResultSorted(error)
      setErrorMsg(error)
    }

  }, [testStr])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <Section>
          <Content>
            <h1>Red Rover Test Exercise</h1>
            <span>Parser</span>

            <InputText value={testStr} onChange={setTestStr} placeholder="Test String" errorMsg={errorMsg} />
            <EqInline>
              <TextArea value={result} displayOnly placeholder="Result" />
              <TextArea value={resultSorted} displayOnly placeholder="Sorted Result" />
            </EqInline>
          </Content>
        </Section>
    </ThemeProvider>
  );
}

export default App;
