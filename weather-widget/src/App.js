import logo from './logo.svg';
import './App.css';
import Locator from './Locator.js'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

const queryCache = new QueryCache()

function App() {
  return (
    <div className="App">
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Locator/>
      </ReactQueryCacheProvider>
    </div>
  );
}

export default App;
