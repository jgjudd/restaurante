import React, { useState, useEffect } from 'react'
import Table from './components/Table'
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
    <div>
      <header>Header</header>
      <div>
        <input type='text' placeholder='Filter By Name/City/Genre' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={() => setSearchTerm('')}>X</button>
      </div>
      
      { console.log("Search Term: " + searchTerm) }
      <div>
        <label for='state-dropdown'>Filter By State:</label>
        <select name="state-dropdown" value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        <button onClick={() => setStateFilter('All')}>Reset</button>
      </div>
      <Table restaurants={results} searchTerm={searchTerm} stateFilter={stateFilter} />
    </div>
  );
}

export default App;
