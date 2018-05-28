import React, { Component } from 'react';
import update from 'immutability-helper';
import Card from './Card';
import { connect } from "react-redux"
import { DropTarget } from 'react-dnd';
 
class Container extends Component {
 
	constructor(props) {
		super(props);		
		this.state = { cards: props.list };

	}
 
	pushCard(card) {
		this.setState(update(this.state, {
			cards: {
				$push: [ card ]
			}
		}));
	}

	// In reducer now
	// removeCard(index) {		
	// 	this.setState(update(this.state, {
	// 		cards: {
	// 			$splice: [
	// 				[index, 1]
	// 			]
	// 		}
	// 	}));
	// }
 
	moveCard(dragIndex, hoverIndex) {
		const { cards } = this.state;		
		const dragCard = cards[dragIndex];
 
		this.setState(update(this.state, {
			cards: {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, dragCard]
				]
			}
		}));
    }
    
    render() {
		const { cards } = this.state;
		const { canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;
		const style = {
			width: "200px",
			height: "90vh",
			border: '1px dashed gray'
		};
 
		const backgroundColor = isActive ? 'lightgreen' : 'lightblue';
 
		return connectDropTarget(
			<div style={{...style, backgroundColor}}>
				{this.props.list.cards.map((card, i) => {
					return (
						<Card 
							key={card.i}
							index={i}
							listId={this.props.id}
							card={card}														
							// removeCard={this.removeCard.bind(this)} 
									// these should be in reducer now
							// moveCard={this.moveCard.bind(this)} 
							/>
					);
				})}
			</div>
		);
  }
}
const cardTarget = {
	drop(props, monitor, component ) {
		const { id } = props;
		const sourceObj = monitor.getItem();		
		if ( id !== sourceObj.listId ) component.pushCard(sourceObj.card);
		return {
			listId: id
		};
	}
}
 
const mapStateToProps = state => state

export default connect(mapStateToProps, {})(DropTarget("CARD", cardTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(Container))