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

    console.log(props.store.getState().filter)

    return (
        <div>
            {anecdotes
                .filter((a) => props.store.getState().filter ? a.content.includes(props.store.getState().filter) : a)
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