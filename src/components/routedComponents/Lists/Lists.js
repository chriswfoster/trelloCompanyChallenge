import React, { Component } from "react"
import { DragDropContext } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"
import CardList from "./childComponents/CardList"
import Header from "./../../Header/Header"
import ListMenu from "./childComponents/ListMenu"
import AddList from "./childComponents/AddList"

import { connect } from "react-redux"
import { getLists } from "../../../ducks/reducer"

import "./lists.css"

class Lists extends Component {
  
  componentDidMount() {
    this.props.getLists(this.props.viewingBoard.id)
  }

  render() {
    console.log(this.props.viewingBoard)
    return (
      <div className="Lists-primary">
        <Header />
        <ListMenu boardName={this.props.viewingBoard.name} boardId={this.props.viewingBoard.id} />
        <div className="Lists-cardFlex">
          {this.props.viewingLists.map((list, i) => (
            <CardList list={list.cards} name={list.name} key={list.id} id={i} />
          ))}
          <AddList />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state

export default connect(mapStateToProps, { getLists })(
  DragDropContext(HTML5Backend)(Lists)
)
