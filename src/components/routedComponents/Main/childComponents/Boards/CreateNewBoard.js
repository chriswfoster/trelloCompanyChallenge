import React, {Component} from 'react'
import { Modal, Input } from "antd"
import axios from 'axios'

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
    axios.post('/api/createBoard', {
        
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
          <p>Type Board Name</p>
          <form onSubmit={e => this.handleOkay(e)}>
            <Input
              value={this.state.boardName}
              onChange={e => this.setState({ boardName: e.target.value })}
            />
          </form>
        </Modal>
</div>
)
}
}
export default CreateNewBoard