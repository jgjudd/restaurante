import React, { useState, useEffect } from 'react'
import Table from './components/Table'
import './App.css';

const App = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
      async function getRestaurants() {
        await fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
          headers: {
              Authorization: 'Api-Key q3MNxtfep8Gt',
          },
        })
        .then(response => response.json())      
        .then(json => setResults(json))
      }
      getRestaurants()
  }, [])

  return (
    <div>
      <input type='text' />
      <Table restaurants={results} />
    </div>
  );
}

export default App;
