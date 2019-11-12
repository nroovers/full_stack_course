import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Country from './components/Country';
import './App.css';

function App() {

  const [countries, setCountries] = useState([])
  // const [filter, setFilter] = useState('')
  const [filteredCountries, setFilteredCountries] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all').then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    const filter = event.target.value

    const fc = filter.length > 0 ?
      countries.filter(c => c.name.toUpperCase().includes(filter.toUpperCase())) :
      countries

    console.log(filter, fc)

    if (fc.length > 0 && fc.length < 10) {
      setSelectedCountry(fc.length === 1 ? fc[0] : '')
      setFilteredCountries(fc)
    }
    else {
      setSelectedCountry('')
      setFilteredCountries('')
    }
  }

  return (
    <div>

      <Filter countries={filteredCountries} selectedCountry={selectedCountry} handleFilterChange={handleFilterChange}></Filter>

      <Country country={selectedCountry}></Country>


    </div>
  );
}

export default App;
