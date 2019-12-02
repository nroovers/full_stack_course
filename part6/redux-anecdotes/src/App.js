import React, { useState } from 'react';
import { voteAnecdote, addAnecdote } from './reducers/anecdoteReducer'

const App = (props) => {
  const anecdotes = props.store.getState()

  const vote = (id) => {
    console.log('vote', id)
    props.store.dispatch(voteAnecdote(id))
  }

  const addNewAnecdote = (event) => {
    event.preventDefault()
    console.log('addNewAnecdote', event.target.newAnec.value)
    props.store.dispatch(addAnecdote(event.target.newAnec.value))
    event.target.newAnec.value = ''
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
      <h2>create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div><input name="newAnec" /></div>
        <button >create</button>
      </form>
    </div>
  )
}

export default App