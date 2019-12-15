import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const UserList = (props) => (
    <div>
        <h2>Users</h2>
        <table>
            <tr>
                <th></th>
                <th>anecdotes created</th>
            </tr>
            {props.users.map(u =>
                <tr>
                    <td>
                        <Link to={`/users/${u.username}`}>{u.name}</Link>
                    </td>
                    <td>{u.anecdotes.length}</td>
                </tr>
            )}
        </table>
    </div>
)

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        users: state.users,
    }
}

export default connect(
    mapStateToProps
)(UserList)