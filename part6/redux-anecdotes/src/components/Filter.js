import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {
    const handleChange = (event) => {
        // input-field value is in variable event.target.value
        console.log(event.target.value)
        props.store.dispatch(setFilter(event.target.value))
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

const mapStateToProps = (state) => {
    // sometimes it is useful to console log from mapStateToProps
    console.log(state)
    return {
        // anecdotes: state.anecdotes,
        filter: state.filter
    }
}

const ConnectedFilter = connect(mapStateToProps)(Filter)
export default ConnectedFilter
