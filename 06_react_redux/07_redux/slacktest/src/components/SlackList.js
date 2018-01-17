import React from 'react'
// import PropTypes from 'prop-types'
import Slack from './Toslack'

const SlackList = ({messages}) => (
  <div>
    {messages.map(message => (
      <Slack key={message.id} {...message}/>
    ))}
  </div>
)

export default SlackList
