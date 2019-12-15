
export const setLogin = (username) =>{
    return {
        type: 'SET_LOGIN',
        data: username
    }
}

export const resetLogin = () =>{
    return {
        type: 'RESET_LOGIN'
    }
}

const loginReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return action.data
        case 'RESET_LOGIN':
            return ''
        default:
            return state;
    }
}

export default loginReducer