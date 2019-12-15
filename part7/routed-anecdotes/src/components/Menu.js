import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
    const padding = {
        paddingRight: 5
    }
    return (
        <div>
            <Link to='/' style={padding}>anecdotes</Link>
            {props.user
                ? <Link to='/create' style={padding}>create new</Link>
                : ''}
            <Link to='/about' style={padding}>about</Link>
            {props.user
                ? <em>{props.user} logged in</em>
                : <Link to="/login">login</Link>
            }
        </div>
    )
}

export default Menu