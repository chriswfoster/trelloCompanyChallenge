import React, { Component } from "react"
import axios from "axios"
import { Modal, Button, Input } from "antd"

import { connect } from "react-redux"
import { boardView } from "../../../../ducks/reducer"

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
    e.preventDefault()
    const { boardId } = this.props
    axios
      .put("/api/updateBoardName", {
        boardId,
        boardName: this.state.renameText
      })
      .then(response =>
        this.props.boardView(
          response.data.filter(item => item.id === boardId)[0]
        )
      )
    this.setState({ showModal: false, renameText: "" })
  }

  render() {
    return (
      <div>
        <Button
          className="ListMenu-primary"
          onClick={() => this.setState({ showModal: true })}
        >
          {this.props.viewingBoard.name}
        </Button>

        <Modal
          title="Basic Modal"
          visible={this.state.showModal}
          onOk={this.handleOkay}
          onCancel={this.handleCancel}
        >
          <p>Rename this board?</p>
          <form onSubmit={e => this.handleOkay(e)}>
            <Input
              value={this.state.renameText}
              onChange={e => this.setState({ renameText: e.target.value })}
            />
          </form>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { boardView }
)(ListMenu)
