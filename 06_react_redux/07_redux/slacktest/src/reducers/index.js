import { combineReducers } from 'redux'
import messages from './messages'

const slackApp = combineReducers({
  messages
})

export default slackApp
