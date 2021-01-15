import React, { useState, useEffect } from 'react'
import Table from './components/Table'
import './App.css';

const App = () => {
  const [results, setResults] = useState([])
  const [genre, setGenre] = useState()

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
      <input type='text' placeholder='Filter By Genre' onChange={(e) => setGenre(e.target.value)} />
      { console.log(genre) }
      <Table restaurants={results} genre={genre} />
    </div>
  );
}

export default App;
