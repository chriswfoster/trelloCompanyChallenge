import React, { Component } from "react"
import update from "immutability-helper"
import Card from "./Card"
import AddCard from "./AddCard"
import { connect } from "react-redux"
import { sendUpdate } from "../../../../ducks/reducer"
import { DropTarget } from "react-dnd"

class ListMenu extends Component {
  constructor(props) {
    super(props)
    this.state = { cards: props.viewingBoard.lists[this.props.id].cards }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.list)
    this.setState({ cards: nextProps.viewingBoard.lists[this.props.id].cards })
  }
  shouldComponentUpdate(nextProps) {
    console.log(nextProps)
      return nextProps.viewingBoard.lists[this.props.id].cards !== this.state.cards ? true : true
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

  updateReducer() {
    this.props.sendUpdate(
      this.props.id,
      this.state.cards,
      this.props.viewingBoard
    )
  }

  render() {
    const { cards } = this.state
    const { canDrop, isOver, connectDropTarget } = this.props
    const isActive = canDrop && isOver

    // const backgroundColor = isActive ? "lightgreen" : "lightblue"

    return connectDropTarget(
      <div className="CardList-primary">
        <p className="CardList-name">{this.props.name}</p>
        {this.state.cards.map((card, i) => {
          return (
            <Card
              key={i}
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
        <AddCard listId={this.props.id} />
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
  }))(ListMenu)
)
