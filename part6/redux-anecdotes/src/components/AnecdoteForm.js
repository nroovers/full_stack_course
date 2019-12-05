import React from 'react';
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'
import anecdotesService from '../services/anecdotes'


const AnecdoteForm = (props) => {


    const addNewAnecdote = (event) => {
        event.preventDefault()

        console.log('addNewAnecdote')

        const content = event.target.newAnec.value

        anecdotesService.create(content)
            .then(newAnecdote => {
                props.addAnecdote(newAnecdote)
            })

        props.setNotification(`New anecdote "${content}" added`)
        setTimeout(() => {
            props.resetNotification()
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

const mapStateToProps = (state) => {
    // sometimes it is useful to console log from mapStateToProps
    console.log(state)
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
    }
}

const mapDispatchToProps = {
    addAnecdote,
    setNotification,
    resetNotification
}

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm