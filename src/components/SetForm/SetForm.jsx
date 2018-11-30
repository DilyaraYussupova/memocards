import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import setService from '../../utils/setService';
import userService from '../../utils/userService';

class SetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      english: '',
      russian: '',
      studySet: null,
      edit: false
    }
  }

  componentDidMount() {
    setService.getUser1(this.props.user._id)
        .then(res => {
            res.json()
                .then(user => this.setState({
                    set: user.set,
                    english: user.set ? user.set.english : '',
                    russian: user.set ? user.set.russian : ''
                }))
        })
  }

  handleChange = (field, e) => {
    this.setState({
        [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    setService.create(this.state, this.props.user)
        .then(res => {
            res.json()
                .then(user => {
                    // this.props.setProfile(user.profile);
                    this.setState({ set: user.set, edit: false })
                })
        })
  }

  toggleEdit = () => this.setState({ edit: !this.state.edit })

  render() {
    console.log(this.state)
    return (
      <div>
        <header className="header-footer">Create Study Set</header>
        {this.state.set && !this.state.edit
          ?
          <SetCard set={this.state.set} toggleEdit={this.toggleEdit} />
          :
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
                      <button className="btn btn-default" onClick={this.handleSubmit}>Add</button>&nbsp;&nbsp;&nbsp;
                      <Link to='/'>Cancel</Link>
                  </div>
              </div>
          </form>
        }
      </div>
    );
  }
};

const SetCard = (props) => {
  console.log(props)
  return (
      <div>
          <p>{props.set && props.set.english}</p>
          <p>{props.set && props.set.russian}</p>
          <button onClick={props.toggleEdit}>Edit</button>
          <button>Delete</button>
      </div>
  )
}

export default SetForm;