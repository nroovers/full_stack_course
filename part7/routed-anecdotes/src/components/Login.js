import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setLogin } from '../reducers/loginReducer'
import { set } from '../reducers/notificationReducer'


const LoginNoHistory = (props) => {

    const onSubmit = (event) => {
        event.preventDefault()
        const user = props.users.find(u => u.username === event.target.username.value)
        if (user) {
            props.setLogin(event.target.username.value)
            props.history.push('/')
        }
        else{
            props.setNotification(`Login failed! User ${event.target.username.value} doesnt exist.`, 5)
        }
    }

    return (
        <div>
            <h2>login</h2>
            <form onSubmit={onSubmit}>
                <div>
                    username: <input name='username' />
                </div>
                <div>
                    password: <input name='password' type='password' />
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

const Login = withRouter(LoginNoHistory)

const mapStateToProps = (state) => {
    return {
        login: state.login,
        users: state.users
    }
}

const mapDispatchToProps = {
    setLogin,
    setNotification: set,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)