import React from 'react';
import './FlashCards.css';

class FlashCards extends React.Component {
  constructor(props) {
		super(props);
    this.state = {cardIndex: 0};
  }
  prevCard = (e) => {
		e.preventDefault();
		if (this.state.cardIndex >= 1) {
			this.setState({cardIndex: this.state.cardIndex - 1});
		}
	}

	nextCard = (e) => {
		e.preventDefault();
		if (this.state.cardIndex < this.props.studySet.cards.length - 1) {
			this.setState({cardIndex: this.state.cardIndex + 1});
		}
	}
  render() {
    return(
      <div>
        <div className="FlashCard">
        <div className='card-container'>
          <h3> Study set: {this.props.studySet.title}</h3>
          <p>Hover over flashcard to flip</p>
          <div className='card-body'>
            <div className='card-side side-back'>
              <div className='container-fluid'>
                <div className='row'>
                    <h2>{this.props.studySet.cards[this.state.cardIndex].russian}</h2>
                </div>
              </div>
            </div>
            <div className='card-side side-front'>
              <div className='container-fluid'>
                <div className='row'>
                    <h2>{this.props.studySet.cards[this.state.cardIndex].english}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
          <button className="prevButton" onClick={this.prevCard}>Previous Button</button>
          <button className="nextButton" onClick={this.nextCard}>Next Button</button>
      </div>
    )
  }
}

export default FlashCards;