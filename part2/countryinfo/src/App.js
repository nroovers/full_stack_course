import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Country from './components/Country';
import Weather from './components/Weather';
import './App.css';

function App() {

  const [countries, setCountries] = useState([])
  // const [filter, setFilter] = useState('')
  const [filteredCountries, setFilteredCountries] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedWeather, setSelectedWeather] = useState('')

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
      // setSelectedCountry(fc.length === 1 ? fc[0] : '')
      setFilteredCountries(fc)
    }
    else {
      // setSelectedCountry('')
      setFilteredCountries('')
    }
  }

  const handleSelectCountry = (country) => {
    setSelectedCountry(country)


    console.log('weather query ', `http://api.weatherstack.com/current?access_key=edbcd4ae66e7f2c186492670c0db7213&query=${country}`)

    axios
      .get(`http://api.weatherstack.com/current?access_key=edbcd4ae66e7f2c186492670c0db7213&query=${country.capital}`).then(response => {
        console.log('weather response: ', response.data)
        setSelectedWeather(response.data)
      })

  }


  return (
    <div>

      <Filter countries={filteredCountries} selectedCountry={selectedCountry} handleFilterChange={handleFilterChange} handleSelectCountry={handleSelectCountry} ></Filter>

      <Country country={selectedCountry}></Country>

      <Weather weather={selectedWeather}></Weather>

    </div>
  );
}

export default App;
