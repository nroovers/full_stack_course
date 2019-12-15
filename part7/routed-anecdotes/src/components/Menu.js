import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

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
            {props.login
                ? <em>{props.login} logged in</em>
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

// const mapDispatchToProps = {
// }

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Menu)