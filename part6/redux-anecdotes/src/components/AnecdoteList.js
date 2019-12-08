import React from 'react';
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'
import Filter from './Filter'


const AnecdoteList = (props) => {

    const vote = (anecdote) => {
        console.log('vote', anecdote)

        props.voteAnecdote(anecdote)

        props.setNotification(`you voted "${anecdote.content}" `)
        setTimeout(() => {
            props.resetNotification()
        }, 5000)
    }

    // console.log(props.filter)

    return (
        <div>
            <Filter />
            {props.anecdotesToShow
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

const filteredAndSortedAnecdotes = ({ anecdotes, filter }) => {
    return anecdotes
        .filter((a) => filter ? a.content.includes(filter) : a)
        .sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
    // sometimes it is useful to console log from mapStateToProps
    console.log('AnecdoteList - mapStateToProps', state)
    return {
        anecdotes: state.anecdotes,
        anecdotesToShow: filteredAndSortedAnecdotes(state)
    }
}

const mapDispatchToProps = {
    voteAnecdote,
    setNotification,
    resetNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList