export const set = (text, sec) => {
    return dispatch => {
        dispatch({
            type: 'SET_NOTIF',
            data: text
        })
        setTimeout(() => {
            dispatch(reset())
        }, sec * 1000)
    }
}

export const reset = () => {
    return {
        type: 'RESET_NOTIF'
    }
}

const notificationReducer = (state = '', action) => {
    console.log('notificationReducer', state, action)
    switch (action.type) {
        case 'SET_NOTIF':
            return action.data
        case 'RESET_NOTIF':
            return ''
        default:
            return state
    }
}


export default notificationReducer