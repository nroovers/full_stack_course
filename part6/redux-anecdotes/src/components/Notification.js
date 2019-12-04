import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const nostyle = {}

  return (
    <div style={props.notification ? style : nostyle}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('Notfication - mapStateToProps', state)
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification