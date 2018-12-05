import React from 'react';
import './FlashCard.css';
import {Link} from 'react-router-dom';

class FlashCard extends React.Component {
  render() {
    return(
      <div>
        <div>
          <header className="header-footer">Study Set: {this.props.studySet.title}</header>
        <Link className="flashcards" to={`/flashcards/${this.props.studySet._id}`}>FlashCards</Link>
          {this.props.studySet.cards.map( card => 
            <p className="cardEach">{card.english} || {card.russian} </p> 
          )}
        </div>
      </div>
    )
  }
}

export default FlashCard;