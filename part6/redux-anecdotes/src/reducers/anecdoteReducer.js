import anecdotesService from '../services/anecdotes'


export const addAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.create(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    // console.log('voteAnecdote', anecdote, updatedAnecdote)
    await anecdotesService.update(updatedAnecdote.id, updatedAnecdote)
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: updatedAnecdote,
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE_ANECDOTE':
      const changedAnec = action.data
      return state.map(anec =>
        anec.id !== changedAnec.id ? anec : changedAnec
      )
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default reducer