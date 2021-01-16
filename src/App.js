import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import SearchBar from './components/SearchBar'
import SelectState from './components/SelectState'
import './App.css';

const App = () => {
  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState()
  const [stateFilter, setStateFilter] = useState('All')

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
    <div id='grid'>
      <div id='header-section'>
        <Header title='Restaurante' color='white' backgroundColor='red' />
      </div>
      <div id='toolbar-section'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SelectState stateFilter={stateFilter} setStateFilter={setStateFilter} />
      </div>
      <div id='table-section'>
        <Table restaurants={results} searchTerm={searchTerm} stateFilter={stateFilter} />
      </div>
    </div>
  );
}

export default App;
