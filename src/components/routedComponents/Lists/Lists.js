import React, { Component } from "react"
import { connect } from "react-redux"

import { getUserBoards, boardView } from "../../../ducks/reducer"
import CardList from "./childComponents/CardList"

import "./lists.css"

class Lists extends Component {
  render() {
    const listsOfCards = this.props.viewingBoard.lists.map((list, i) => (
      <CardList listDetails={list} key={i}/>
    ))
    console.log(this.props)
    return (
    <div>
      <p>Something here</p> 
      {listsOfCards}
      </div>
      )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  getUserBoards,
  boardView
})(Lists)
