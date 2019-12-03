export const setNotification = (text) => {
    return {
        type: 'SET_ANECDOTE',
        data: { text }
    }
}

const reducer = (state = 'Initil notification', action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
        case 'SET_ANECDOTE':
            console.log('SET_ANECDOTE', action)
            return action.data
        default:
            return state
    }
}

export default reducer