import React, {Component} from 'react'
import { Modal, Input } from "antd"
import axios from 'axios'
import { connect } from "react-redux"
import { boardListUpdater } from '../../../../../ducks/reducer'

class CreateNewBoard extends Component{
constructor(){
    super()
    this.state = {
        showModal: false,
        boardName: ""
    }
}

handleOkay = (e) => {
    e.preventDefault()
    const {boardName} = this.state
    const {uid} = this.props.user
    axios.post('/api/createBoard', {
        boardName,
        uid
    })
    .then(response =>{
        let newBoardList = this.props.userBoardList.push(response.data[0])
        this.props.boardListUpdater(newBoardList)

    })
    this.setState({showModal: false})
}
handleCancel = (e) => {
    this.setState({showModal: false})
}

render(){
return(
<div>
<p onClick={() => this.setState({showModal: true})}>Create New Board...</p>
<Modal
          title="Create New Board"
          visible={this.state.showModal}
          onOk={this.handleOkay}
          onCancel={this.handleCancel}
        >
          <p>Type Board Name Below:</p>
          <form onSubmit={e => this.handleOkay(e)}>
            <Input
            placeholder="Board Name Here..."
              value={this.state.boardName}
              onChange={e => this.setState({ boardName: e.target.value })}
            />
          </form>
        </Modal>
</div>
)
}
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {boardListUpdater})(CreateNewBoard)