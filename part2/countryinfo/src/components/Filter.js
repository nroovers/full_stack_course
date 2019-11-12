import React from 'react';


function Filter({ countries, handleFilterChange, handleSelectCountry }) {

  const renderCountry = (country) => {

    return (
      <div key={country.numericCode}>
        {country.name} 
        <button onClick={() => { handleSelectCountry(country) }}>show</button>
      </div>
    )
  }

  const renderCountries = () => {
    // console.log('Filter: ', countries)
    if (countries) {
      return countries.map(c => renderCountry(c))
    }
    else {
      return <div>Too many matches, Specify another filter.</div>
    }
  }

  return (
    <div>
      <input onChange={handleFilterChange}></input>
      {renderCountries()}
    </div>
  );
}

export default Filter;
