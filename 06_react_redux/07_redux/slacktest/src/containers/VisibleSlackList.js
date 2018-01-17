import { connect } from 'react-redux'
import SlackList from '../components/SlackList'

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

const VisibleSlackList = connect(mapStateToProps)(SlackList);

export default VisibleSlackList
