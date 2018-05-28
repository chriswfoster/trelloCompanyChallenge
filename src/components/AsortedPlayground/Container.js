import React, { Component } from "react"
import update from "immutability-helper"
import Card from "./Card"
import { connect } from "react-redux"
import { sendUpdate } from "../../ducks/reducer"
import { DropTarget } from "react-dnd"

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = { cards: props.list }
  }

  componentWillReceiveProps(){
	  
  }

  pushCard(card) {
    this.setState(
      update(this.state, {
        cards: {
          $push: [card]
        }
      })
    )
   this.updateReducer()
  }

  removeCard(index) {
    this.setState(
      update(this.state, {
        cards: {
          $splice: [[index, 1]]
        }
      })
    )
	this.updateReducer()

  }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      })
    )
    console.log("move", this.props.id)
  }

  updateReducer(){
	this.props.sendUpdate(
		this.props.id,
		this.state.cards,
		this.props.viewingBoard
	  )
  }

  render() {
    console.log(this.props)
    const { cards } = this.state
    const { canDrop, isOver, connectDropTarget } = this.props
    const isActive = canDrop && isOver
    const style = {
      width: "200px",
      height: "90vh",
      border: "1px dashed gray"
    }

    const backgroundColor = isActive ? "lightgreen" : "lightblue"

    return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>
        {this.state.cards.map((card, i) => {
          return (
            <Card
              key={card.i}
              index={i}
              listId={this.props.id}
              card={card}
              cards={this.props.list.cards}
              removeCard={this.removeCard.bind(this)}
			  moveCard={this.moveCard.bind(this)}
			  updateReducer={this.updateReducer.bind(this)}
            />
          )
        })}
      </div>
    )
  }
}
const cardTarget = {
  drop(props, monitor, component) {
    const { id } = props
    const sourceObj = monitor.getItem()
    if (id !== sourceObj.listId) component.pushCard(sourceObj.card)
    return {
      listId: id
    }
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { sendUpdate })(
  DropTarget("CARD", cardTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }))(Container)
)
