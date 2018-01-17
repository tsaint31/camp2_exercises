import { combineReducers } from 'redux'
import messages from './messages'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  messages,
  visibilityFilter
})

export default todoApp
