import React, { Component } from "react"
import { Modal, Button, Input } from "antd"
import "antd/dist/antd.css"

class ListMenu extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      renameText: ""
    }
  }

  handleCancel = e => {
    this.setState({ showModal: false, renameText: "" })
  }

  handleOkay = e => {
    console.log(e)
    this.setState({ showMOdal: false })
  }

  render() {
    return (
      <div>
        <Button
          className="ListMenu-primary"
          onClick={() => this.setState({ showModal: true })}
        >
          {this.props.boardName}
        </Button>

        <Modal
          title="Basic Modal"
          visible={this.state.showModal}
          onOk={this.handleOkay}
          onCancel={this.handleCancel}
        >
          <p>Rename this board?</p>
          <Input onChange={e => this.setState({renameText: e.target.value})} />
        </Modal>
      </div>
    )
  }
}
export default ListMenu
