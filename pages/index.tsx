import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAnnouncement } from '../states/announcement/action'

interface IProps {
  announcementMessage: string
  updateAnnouncement: any
}

interface IState {}

class IndexPage extends React.Component<IProps, IState> {
  render() {
    const { announcementMessage, updateAnnouncement } = this.props
    return (
      <div>
        Announcement: {announcementMessage}
        <button onClick={() =>  updateAnnouncement('We are closed today!')}>Close!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  announcementMessage: state.message,
})
// dispatch(sidebarVisibleAction())
const mapDispatchToProps = (dispatch) => ({
  updateAnnouncement: bindActionCreators(updateAnnouncement, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)