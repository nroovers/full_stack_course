import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { set } from '../reducers/notificationReducer'
import { updateUser } from '../reducers/userReducer'


const CreateNew = withRouter((props) => {
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        const newanec = props.createAnecdote({
            content,
            author,
            info,
            username: props.user
        }).data

        console.log('newanec', newanec)

        const loggedInUser = props.users.find(u => u.username === props.user)

        console.log('loggedInUser', loggedInUser)

        props.updateUser({
            ...loggedInUser,
            anecdotes: loggedInUser.anecdotes
                ? loggedInUser.anecdotes.concat(newanec.id)
                : [newanec.id]
        })
        props.setNotification(`New blog ${content} created`, 5)
        props.history.push('/')
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
            <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div>
                    author
            <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div>
                    url for more info
            <input name='info' value={info} onChange={(e) => setInfo(e.target.value)} />
                </div>
                <button>create</button>
            </form>
        </div>
    )

})


const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        users: state.users,
    }
}

const mapDispatchToProps = {
    createAnecdote,
    setNotification: set,
    updateUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateNew)