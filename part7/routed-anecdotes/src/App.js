import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Footer from './components/Footer'
import About from './components/About'
import Menu from './components/Menu'
import Notification from './components/Notification'
import CreateNew from './components/CreateNew'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteView from './components/AnecdoteView'

// import { selectAnecdote } from './reducers/anecdoteReducer'

const App = (props) => {

  const anecdoteById = (id) => {
    console.log('anecdoteById', props.anecdotes, id)
    return props.anecdotes.find(a => a.id === id)
  }

  return (
    <div>
      <Router>
        <h1>Software anecdotes</h1>
        <Menu />
        <Notification></Notification>
        <Route exact path="/" render={() => <AnecdoteList />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/create" render={() => <CreateNew />} />
        <Route exact path="/anecdotes/:id" render={({ match }) => <AnecdoteView anecdote={anecdoteById(match.params.id)} />} />
      </Router>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('APP - mapStateToProps', state)
  return {
    anecdotes: state.anecdotes,
  }
}

// const mapDispatchToProps = {
//   selectAnecdote
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(App)