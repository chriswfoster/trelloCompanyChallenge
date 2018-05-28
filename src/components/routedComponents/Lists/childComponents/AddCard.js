import React, { Component } from "react"
import { connect } from "react-redux"
import { addCardTextHandler, addCardSubmit } from "../../../../ducks/reducer"
import Card from "../../../AsortedPlayground/Card"

class AddCard extends Component {
  constructor() {
    super()
    this.state = {
      add: false
    }
  }

  render() {
    const inputTarget = document.getElementById("test")

    return (
      <div>
        {!this.state.add ? (
          <button onClick={() => this.setState({ add: true })}>
            Add a Card...
          </button>
        ) : (
          <div>
            <form onSubmit={e => addCardSubmit(e)} onBlur={() => this.setState({ add: false })}>
              <input
                id="test"
                onChange={e => this.props.addCardTextHandler(e)}
                type="text"
                autoFocus
              />
              <input type="submit" value="Add" />
              <button onClick={() => this.setState({ add: false })}>+</button>
          
            </form>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, { addCardSubmit, addCardTextHandler })(
  AddCard
)
