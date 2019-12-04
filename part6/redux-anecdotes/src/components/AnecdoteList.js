import React from 'react';
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'
import Filter from './Filter'


const AnecdoteList = (props) => {

    const anecdotes = props.anecdotes

    const vote = (anecdote) => {
        console.log('vote', anecdote)
        props.voteAnecdote(anecdote.id)

        props.setNotification(`you voted "${anecdote.content}" `)
        setTimeout(() => {
            props.resetNotification()
        }, 5000)
    }

    console.log(props.filter)

    return (
        <div>
            <Filter />
            {anecdotes
                .filter((a) => props.filter ? a.content.includes(props.filter) : a)
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote)}>vote</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

const mapStateToProps = (state) => {
    // sometimes it is useful to console log from mapStateToProps
    console.log(state)
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
    }
}

const mapDispatchToProps = {
    voteAnecdote,
    setNotification,
    resetNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList