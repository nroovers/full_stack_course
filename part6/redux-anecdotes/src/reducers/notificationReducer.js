export const setNotification = (text) => {
    return {
        type: 'SET_NOTIF',
        data: text
    }
}

export const resetNotification = () => {
    return {
        type: 'RESET_NOTIF'
    }
}

const reducer = (state = 'Initil notification', action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
        case 'SET_NOTIF':
            console.log('SET_NOTIF', action)
            return action.data
        case 'RESET_NOTIF':
            console.log('RESET_NOTIF', action)
            return ''
        default:
            return state
    }
}

export default reducer