import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import SearchBar from './components/SearchBar'
import SelectAttire from './components/SelectAttire'
import SelectState from './components/SelectState'
import './App.css';

const App = () => {
  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [stateFilter, setStateFilter] = useState('All')
  const [attireFilter, setAttireFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

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
        <SelectAttire attireFilter={attireFilter} setAttireFilter={setAttireFilter} />
      </div>
      <div id='table-section'>
        <Table 
          restaurants={results} 
          searchTerm={searchTerm} 
          stateFilter={stateFilter} 
          attireFilter={attireFilter}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage} 
        />
      </div>
    </div>
  );
}

export default App;
