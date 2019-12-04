import React from 'react'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const nostyle = {}

  console.log( props)
  console.log('render notificaiton', props.store.getState().notification)

  return (
    <div style={props.store.getState().notification.text ? style : nostyle}>
      {props.store.getState().notification.text}
    </div>
  )
}

export default Notification