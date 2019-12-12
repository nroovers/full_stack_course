import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { set } from '../reducers/notificationReducer'


const CreateNew = withRouter((props) => {
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        props.createAnecdote({
            content,
            author,
            info
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
    }
}

const mapDispatchToProps = {
    createAnecdote,
    setNotification: set
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateNew)