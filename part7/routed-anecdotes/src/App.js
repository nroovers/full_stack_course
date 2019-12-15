import React, {  } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route, Redirect
} from 'react-router-dom'

import Footer from './components/Footer'
import About from './components/About'
import Menu from './components/Menu'
import Notification from './components/Notification'
import CreateNew from './components/CreateNew'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteView from './components/AnecdoteView'
import Login from './components/Login'
import UserList from './components/UserList'
import UserView from './components/UserView'

// import { selectAnecdote } from './reducers/anecdoteReducer'

const App = (props) => {

  // const [user, setUser] = useState('')
  // const [users, setUsers] = useState([
  //   {
  //     username: 'nicolai',
  //     name: 'Nicolai Roovers'
  //   }
  // ])

  // const login = (username) => {
  //   setUser(username)
  // }

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
        <Route path="/create" render={() =>
          props.login ? <CreateNew /> : <Redirect to="/login" />} />
        <Route exact path="/anecdotes/:id" render={({ match }) =>
          <AnecdoteView anecdote={anecdoteById(match.params.id)} />} />
        <Route path="/login" render={() =>
          <Login />
        } />
        <Route exact path="/users" render={() => <UserList />} />
        <Route exact path="/users/:username" render={({ match }) =>
          <UserView username={match.params.username} />} />
      </Router>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('APP - mapStateToProps', state)
  return {
    anecdotes: state.anecdotes,
    login: state.login
    // users: state.users,
  }
}

// const mapDispatchToProps = {
//   selectAnecdote
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(App)