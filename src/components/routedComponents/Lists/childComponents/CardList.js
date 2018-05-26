import React, { Component } from "react"

class CardList extends Component {
  render() {
    console.log(this.props.listDetails)

    return (
      <div className="CardList-primary">
        <div className="CardList-secondary">
          {this.props.listDetails.name}
          {/* As I said in the Lists component, I'm not sure where you prefer the mapping to go. I'm not sure what best practice is, I've seen it both ways. */}
          <div className="CardList-cardFlex">
            {this.props.listDetails.cards.map(card => <p>{card}</p>)}
          </div>
        </div>
      </div>
    )
  }
}
export default CardList
