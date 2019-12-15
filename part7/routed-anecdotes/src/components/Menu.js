import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetLogin } from '../reducers/loginReducer'

const Menu = (props) => {
    const padding = {
        paddingRight: 5
    }
    return (
        <div>
            <Link to='/' style={padding}>anecdotes</Link>
            {props.login
                ? <Link to='/create' style={padding}>create new</Link>
                : ''}
            <Link to='/about' style={padding}>about</Link>
            <Link to='/users' style={padding}>users</Link>
            {props.login
                ? <div><em>{props.login} logged in</em> <button onClick={props.resetLogin}>logout</button></div>
                : <Link to="/login">login</Link>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
    }
}

const mapDispatchToProps = {
    resetLogin
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)