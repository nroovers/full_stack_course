export const setFilter = (text) => {
    return {
        type: 'SET_FILTER',
        data: text
    }
}

export const resetFilter = () => {
    return {
        type: 'RESET_FILTER'
    }
}

const reducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
        case 'SET_FILTER':
            console.log('SET_FILTER', action)
            return action.data
        case 'RESET_FILTER':
            console.log('RESET_FILTER', action)
            return ''
        default:
            return state
    }
}

export default reducer