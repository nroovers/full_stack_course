const initialState = [
    {
        username: 'nicolai',
        name: 'Nicolai Roovers',
        anecdotes: ['1']
    },
    {
        username: 'xman',
        name: 'Kertstman',
        anecdotes: ['2', '3']
    }
]

export const newUser = ({ username, name }) => {
    return {
        type: 'NEW_USER',
        data: { username, name }
    }
}

export const updateUser = (updatedUser) => {
    return {
        type: 'UPDATE_USER',
        data: { user: updatedUser }
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_USER':
            return state.concat(action.data)
        case 'UPDATE_USER':
            return state.map(u => u.username === action.data.user.username ? action.data.user : u)
        default:
            return state;
    }
}

export default userReducer
