import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteView = (props) => (
    <div>
        <h2>{props.anecdote.content} by {props.anecdote.author}</h2>
        <div>has {props.anecdote.votes} votes
        <button onClick={() => { props.voteAnecdote(props.anecdote.id) }}>vote</button>
        </div>
        <div>for more info see <a href={props.anecdote.info}>{props.anecdote.info}</a></div>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    return {
        anecdote: ownProps.anecdote,
    }
}

const mapDispatchToProps = {
    voteAnecdote
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(AnecdoteView)