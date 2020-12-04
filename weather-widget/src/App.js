import logo from './logo.svg';
import './App.css';
import Locator from './Locator.js'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import styled from '@emotion/styled'

const queryCache = new QueryCache()

const Container = styled.div`
  text-align: center;
`

function App() {
  return (
    <Container>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Locator/>
      </ReactQueryCacheProvider>
    </Container>
  );
}

export default App;
