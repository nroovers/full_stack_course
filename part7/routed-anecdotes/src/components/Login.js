import React from 'react'
import { withRouter } from 'react-router-dom'


const LoginNoHistory = (props) => {
    const onSubmit = (event) => {
        event.preventDefault()
        props.onLogin(event.target.username.value)
        props.history.push('/')
    }

    return (
        <div>
            <h2>login</h2>
            <form onSubmit={onSubmit}>
                <div>
                    username: <input name='username'/>
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
export default Login