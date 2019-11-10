import React from 'react'
import './Notification.css'

const Notification = ({ notification }) => {

    if (notification === null || notification === '') {
        return null
    }

    return (
        // <div class={notification.isError ? 'error' : 'notification'}>
        <div className='notif'>
            {notification}
        </div>
    )
}

export default Notification