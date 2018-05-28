import React, { Component } from "react"

import { connect } from "react-redux"
import { DragDropContext } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"

import CardList from "./childComponents/CardList"
import Header from "./../../Header/Header"
import ListMenu from "./childComponents/ListMenu"

import "./lists.css"

class Lists extends Component {
  render() {
    return (
      <div className="Lists-primary">
        <Header />
        <ListMenu boardName={this.props.viewingBoard.name} />
        <div className="Lists-cardFlex">
          {this.props.viewingBoard.lists.map((list, i) => (
            <CardList list={list.cards} name={list.name} key={i} id={i} />
          ))}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state

export default connect(mapStateToProps, {})(
  DragDropContext(HTML5Backend)(Lists)
)
