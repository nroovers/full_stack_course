import React from 'react';


function Filter({ countries,  handleFilterChange }) {

  const renderCountries = () => {
    // console.log('Filter: ', countries)
    if (countries) {
      return countries.map(c => <div key={c.numericCode}>{c.name}</div>)
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
