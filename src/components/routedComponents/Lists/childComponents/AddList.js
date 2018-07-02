import React, { Component } from "react"
import { connect } from "react-redux"
import { addListTextHandler, addListSubmit } from "../../../../ducks/reducer"
import {  Input } from "antd"

class AddList extends Component {
  constructor() {
    super()
    this.state = {
      add: false
    }
  }

  render() {
    const style = {
      height: "4vh"
    }
    return (
      <div>
        {this.state.add ? (
          <div>
            <form
              onSubmit={e =>
                this.props.addListSubmit(
                  e,
                  this.props.viewingLists,
                  this.props.addListText,
                  this.props.boardId
                )
              }
            >
              <Input
                type="text"
                onChange={e => this.props.addListTextHandler(e)}
                placeholder="Enter list title..."
              />
            </form>
          </div>
        ) : (
          <div className="CardList-primary" style={{ ...style }}>
            <button
              className="AddList-button"
              onClick={() => this.setState({ add: true })}
            >
              Add a list...
            </button>
          </div>
        )}
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { addListTextHandler, addListSubmit }
)(AddList)
