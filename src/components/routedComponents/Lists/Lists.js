import React, { Component } from "react"
import { connect } from "react-redux"

import { getUserBoards, boardView } from "../../../ducks/reducer"
import CardList from "./childComponents/CardList"
import ListMenu from "./childComponents/ListMenu"
import Header from "./../../Header/Header"

import "./lists.css"

class Lists extends Component {
  render() {
    // I'm not sure how you prefer to map over things and return them. Here I'm mapping in the render. But in CardList, I'm mapping in the return.
    const listsOfCards = this.props.viewingBoard.lists.map((list, i) => (
      <CardList listDetails={list} key={i} />
    ))
    console.log(this.props)
    return (
      <div className="Lists-primary">
        <Header />
        <ListMenu boardName={this.props.viewingBoard.name} />
        <div className="Lists-cardFlex">{listsOfCards}</div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  getUserBoards,
  boardView
})(Lists)
