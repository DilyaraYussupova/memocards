import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import setService from '../../utils/setService';

class SetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      cards: [],
      russian: '',
      english: ''
    }
  }


  handleChange = (field, e) => {
    this.setState({
        [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    delete this.state.russian;
    delete this.state.english;
    
    setService.create(this.state)
    .then(res => res.json())
    .then(user => {
        this.props.handleAddStudySet(user);
        this.props.history.push('/display');
    });
}

addCard = (e) => {
    e.preventDefault();
    this.setState(curState => ({
        cards: [{russian: this.state.russian, english: this.state.english}, ...curState.cards],
        russian: '',
        english: '', 
        // title: ''
    }));
  }

  deleteHandler = (idx) => this.setState(curState => ({
    cards: curState.cards.filter((c, i) => i !== idx)
  }));

  render() {
    console.log(this.state)
    return (
      <div>
        <header className="header-footer">Create Study Set</header>
        <input type="title" className="title" placeholder="Enter Title" value={this.state.title} onChange={(e) => this.handleChange('title', e)}></input>
          <form className="form-horizontal">
              <div className="form-group">
                  <div className="col-sm-12">
                      <input type="english" className="form-control" placeholder="Enter English" value={this.state.english} onChange={(e) => this.handleChange('english', e)} />
                  </div>
              </div>
              <div className="form-group">
                  <div className="col-sm-12">
                      <input type="russian" className="form-control" placeholder="Enter Russian" value={this.state.russian} onChange={(e) => this.handleChange('russian', e)} />
                  </div>
              </div>
              <div className="form-group">
                  <div className="col-sm-12 text-center">
                      <button className="btn btn-default" onClick={this.addCard}>Add</button>&nbsp;&nbsp;&nbsp;
                      <Link to='/'>Cancel</Link>
                  </div>
              </div>
          </form>
        <header className="header-footer">{this.state.title} Study Set</header>
        {this.state.cards.map((card, idx) => <SetCard card={card} idx={idx} deleteHandler={this.deleteHandler}/>)}
        <button onClick={this.handleSubmit}>Create Study Set</button>
      </div>
    );
  }
};

const SetCard = (props) => {
  console.log(props)
  return (
      <div>
          <p>{props.card.english}</p>
          <p>{props.card.russian}</p>
          <button onClick={() => props.deleteHandler(props.idx)}>Delete</button>
      </div>
  )
}

export default SetForm;