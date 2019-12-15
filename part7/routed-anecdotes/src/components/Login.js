import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setLogin } from '../reducers/loginReducer'


const LoginNoHistory = (props) => {

    const onSubmit = (event) => {
        event.preventDefault()
        props.setLogin(event.target.username.value)
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

const mapStateToProps = (state) => {
    return {
        login: state.login,
    }
}

const mapDispatchToProps = {
    setLogin
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)