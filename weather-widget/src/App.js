import logo from './logo.svg';
import './App.css';
import Weather from './Weather.js'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  }
})
const queriesWithData = JSON.parse(localStorage.getItem('query'))
queriesWithData.forEach(query => {
  queryCache.setQueryData(query.queryHash, query.data)
})

function App() {
  return (
    <div className="App">
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Weather />
      </ReactQueryCacheProvider>
    </div>
  );
}

export default App;
