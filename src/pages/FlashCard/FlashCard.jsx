import React from 'react';
import './FlashCard.css';

class FlashCard extends React.Component {
    render() {
      return(
        <div>
        <div className='card-container'>
            <h3> Study set: {this.props.studySet.title}</h3>
            <p>Hover over flashcard to flip from term to definition</p>
            <div className='card-body'>
            {this.props.studySet.cards.map(card => 
              <div className='card-side side-back'>
                <div className='container-fluid'>
                  <div className='row'>
                      <h2>{card.russian}</h2>
                  </div>
                </div>
              </div>
            )}
            {this.props.studySet.cards.map(card => 
              <div className='card-side side-front'>
                <div className='container-fluid'>
                  <div className='row'>
                      <h2>{card.english}</h2>
                  </div>
                </div>
              </div>
            )}
            </div>
        </div>
      </div>
      )
    }
}

// class CardFront extends React.Component {
//     render() {
//       return(
//         <div className='card-side side-front'>
//           <div className='container-fluid'>
//             <div className='row'>
//                 <h2>English</h2>
//             </div>
//           </div>
//         </div>
//       )
//     }
//   }

//   class CardBack extends React.Component {
//     render() {
//       return(
//         <div className='card-side side-back'>
//           <div className='container-fluid'>
//             <div className='row'>
//                 <h2>Russian</h2>
//             </div>
//           </div>
//         </div>
//       )
//     }
//   }

export default FlashCard;