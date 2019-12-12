

const initialState = [
    {
        content: 'If it hurts, do it more often',
        author: 'Jez Humble',
        info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
        votes: 0,
        id: '1'
    },
    {
        content: 'Premature optimization is the root of all evil',
        author: 'Donald Knuth',
        info: 'http://wiki.c2.com/?PrematureOptimization',
        votes: 1,
        id: '2'
    }]


const generateId = () => Math.round(Math.random() * 100000)

export const createAnecdote = ({ content, author, info }) => {
    return {
        type: 'NEW_ANEC',
        data: {
            content,
            author,
            info,
            votes: 0,
            id: generateId().toString()
        }
    }
}

export const voteAnecdote = (id) => {
    return {
        type: 'VOTE_ANEC',
        data: { id }
    }
}

// export const selectAnecdote = (id) => {
//     return {
//         type: 'SELECT_ANEC',
//         data: { id }
//     }
// }

const anecdoteReducer = (state = initialState, action) => {
    console.log('anecdoteReducer', state, action)
    switch (action.type) {
        case 'NEW_ANEC':
            console.log('NEW_ANEC', state.concat(action.data))
            return state.concat(action.data)
        case 'VOTE_ANEC':
            const anecdoteToVote = state.find(a => a.id === action.data.id)
            if (anecdoteToVote) {
                const updatedAnecdote = {
                    ...anecdoteToVote,
                    votes: anecdoteToVote.votes + 1
                }
                return state.map(a => a.id === action.data.id ? updatedAnecdote : a)
            }
            else
                return state
        // case 'SELECT_ANEC':
        //     return state.map(a => a.id === action.data.id ?
        //         { ...a, selected: true } : { ...a, selected: false })
        default:
            return state
    }
}


export default anecdoteReducer