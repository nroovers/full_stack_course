import React from 'react';
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'


const AnecdoteForm = (props) => {


    const addNewAnecdote = (event) => {
        event.preventDefault()

        console.log('addNewAnecdote', event.target.newAnec.value)
        props.store.dispatch(addAnecdote(event.target.newAnec.value))

        props.store.dispatch(setNotification(`New anecdote "${event.target.newAnec.value}" added`))
        setTimeout(() => {
            props.store.dispatch(resetNotification())
        }, 5000)

        event.target.newAnec.value = ''
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addNewAnecdote}>
                <div><input name="newAnec" /></div>
                <button >create</button>
            </form>
        </div>
    )
}


export default AnecdoteForm