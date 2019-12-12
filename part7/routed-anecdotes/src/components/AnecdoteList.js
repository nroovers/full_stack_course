import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const AnecdoteList = (props) => (
    <div>
        <h2>Anecdotes</h2>
        <ul>
            {props.anecdotes.map(anecdote =>
                <li key={anecdote.id}>
                    <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
                </li>)}
        </ul>
    </div>
)

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
    }
}

export default connect(
    mapStateToProps
)(AnecdoteList)