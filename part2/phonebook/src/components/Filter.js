import React from 'react'


const Filter = ({onFilterChange, filter}) => {

      
    return (

        <div>
            filter persons with name like <input onChange={onFilterChange} value={filter} />
        </div>

    )
}


export default Filter