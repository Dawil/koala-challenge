import './App.css';
import Locator from './Locator.js'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { useState } from 'react'

const queryCache = new QueryCache()

const Container = styled.div`
  text-align: center;
`
const ToggleTheme = styled.button`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.button};
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 1;
  margin: 5px;
`

const themes = {
  light: {
    colors: {
      button: 'white',
      background: '#e7dfd0',
      text: 'black'
    }
  },
  dark: {
    colors: {
      button: 'black',
      background: '#1b1b24',
      text: 'white'
    }
  }
}


function App() {
  const [theme, setTheme] = useState('light')
  const selectedTheme = themes[theme]

  return (
    <Container>
      <ThemeProvider theme={selectedTheme}>
        <ToggleTheme
          onClick={() => {
            if (theme === 'light') {
              setTheme('dark')
            } else {
              setTheme('light')
            }
          }}
        >{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }</ToggleTheme>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <Locator/>
        </ReactQueryCacheProvider>
      </ThemeProvider>
    </Container>
  );
}

export default App;
