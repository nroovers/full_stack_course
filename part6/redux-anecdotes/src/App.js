import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { initAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {

  useEffect(() => {
    props.initAnecdotes()
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