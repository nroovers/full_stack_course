import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { initAnecdotes } from './reducers/anecdoteReducer'
import anecdotesService from './services/anecdotes'

const App = (props) => {

  useEffect(() => {
    anecdotesService.getAll()
      .then(anecdotes => props.initAnecdotes(anecdotes))
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>

      <Notification />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default connect(null, { initAnecdotes })(App)