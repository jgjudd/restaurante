import React, { useEffect, useState } from 'react'
import Table from './components/Table'
import './App.css';

const App = () => {
  const [results, setResults] = useState([])
    
  useEffect(() => {
      fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
          headers: {
              Authorization: 'Api-Key q3MNxtfep8Gt',
          },
      })
      .then(response => response.json())
      .then(json => setResults(json))
  }, [])

  return (
    <div>
      <input type='text' />
      <Table restaurants={results} />
    </div>
  );
}

export default App;
