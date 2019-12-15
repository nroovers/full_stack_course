import React from 'react'
import { connect } from 'react-redux'


const renderAnecdote = (anecdotes, id) => {
    const anecdote = anecdotes.find(a => a.id === id)
    return (<li key={anecdote.id}>
        {anecdote.content}
    </li>)
}

const UserView = (props) => {

    console.log(props)

    if (props.user === undefined) {
        return null
    }

    return (
        <div>
            <h2>{props.user.name}</h2>
            <h3>added anecdotes</h3>
            <ul>
                {props.user.anecdotes.map(id => renderAnecdote(props.anecdotes, id))}
            </ul>
        </div>
    )
}

const getUser = (state, ownProps) => {
    return state.users.find(u => u.username === ownProps.username)
}

const mapStateToProps = (state, ownProps) => {
    return {
        anecdotes: state.anecdotes,
        user: getUser(state, ownProps),
    }
}

export default connect(
    mapStateToProps
)(UserView)