import React, { Component } from "react"

import { connect } from "react-redux"
import { DragDropContext } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"

import CardList from "./childComponents/CardList"
import Header from "./../../Header/Header"
import ListMenu from "./childComponents/ListMenu"
import AddList from "./childComponents/AddList"

import "./lists.css"

class Lists extends Component {
shouldComponentUpdate(nextProps) {

    return nextProps !== this.props ? true : false
  }
  render() {
    console.log(this.props)
    return (
      <div className="Lists-primary">
        <Header />
        <ListMenu boardName={this.props.viewingBoard.name} />
        <div className="Lists-cardFlex">
          {this.props.viewingBoard.lists.map((list, i) => (
            <CardList list={list.cards} name={list.name} key={i} id={i} />
          ))}
          <AddList />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state

export default connect(mapStateToProps, {})(
  DragDropContext(HTML5Backend)(Lists)
)
