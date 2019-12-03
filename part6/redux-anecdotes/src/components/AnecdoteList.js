import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {

    const anecdotes = props.store.getState().anecdotes

    const vote = (anecdote) => {
        console.log('vote', anecdote)
        props.store.dispatch(voteAnecdote(anecdote.id))

        props.store.dispatch(setNotification(`you voted "${anecdote.content}" `))
        setTimeout(() => {
            props.store.dispatch(resetNotification())
        }, 5000)
    }

    return (
        <div>
            {anecdotes
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

export default AnecdoteList