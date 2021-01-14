import React, { useEffect, useState } from 'react'
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
    <ul>
      { console.log(results)}
      {
        results.map((location, i) => (
          <li key={i}>
            {location.name} |
            {location.address1} |
            {location.city}, {location.state}
          </li>
        ))
      }
    </ul>
  );
}

export default App;
