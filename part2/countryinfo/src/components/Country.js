import React from 'react';

function Country({ country }) {

    const renderLanguages = () => {
        return country.languages.map(l => <li key={l.name}>{l.name}</li>)
    }

    if (country)
        return (
            <div>

                <h2>{country.name}</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>Capital: </td>
                            <td>{country.capital}</td>
                        </tr>
                        <tr>
                            <td>Population: </td>
                            <td>{country.population}</td>
                        </tr>
                        <tr>
                            <td>Languages: </td>
                            <td>
                                <ul>{renderLanguages()}</ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <img src={country.flag} alt={country.name} width="200px"></img>

            </div>
        );

    return (<div></div>)
}

export default Country;
