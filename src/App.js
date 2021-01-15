import React, { useState, useEffect } from 'react'
import HeaderSection from './components/styled/HeaderSection'
import Table from './components/Table'
import SearchBar from './components/SearchBar'
import SelectState from './components/SelectState'
import './App.css';
import TableSection from './components/styled/TableSection'
import ToolbarSection from './components/styled/ToolbarSection'

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
    <React.Fragment>
      <HeaderSection title='Restaurante' />
      <ToolbarSection>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SelectState stateFilter={stateFilter} setStateFilter={setStateFilter} />
      </ToolbarSection>
      <TableSection>
        <Table restaurants={results} searchTerm={searchTerm} stateFilter={stateFilter} />
      </TableSection>
    </React.Fragment>
  );
}

export default App;
