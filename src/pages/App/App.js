
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import setService from '../../utils/setService';
import Home from '../HomePage/Home';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import SetForm from '../../components/SetForm/SetForm';
import SetLists from '../../components/SetLists/SetLists';
import FlashCard from '../FlashCard/FlashCard';
import FlashCards from '../FlashCards/FlashCards';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studySets: [],
      user: null
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignuporLogin = () =>
    this.setState({ user: userService.getUser() });

  handleAddStudySet = (user) => {
    this.setState({ studySets: user.studySets });
    // console.log(this.state.studySets)
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    var user = userService.getUser();
    console.log(user)
    if (user) {
      this.setState({user})
      // TODO: get the user's studySets and update state
      setService.getAll()
        .then(studySets => this.setState({ studySets: studySets }))
        .catch(error => this.setState({ error }));
    }
  }

  render() {
    return (
      <div>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/signup' render={(props) =>
            <SignupPage
              {...props}
              handleSignuporLogin={this.handleSignuporLogin}
            />
          } />
          <Route exact path='/login' render={(props) =>
            <LoginPage
              {...props}
              handleSignuporLogin={this.handleSignuporLogin}
            />
          } />
          <Route exact path="/create" render={(props) =>
            <SetForm
              {...props}
              handleAddStudySet={this.handleAddStudySet} 
            />
          } />
          <Route exact path="/display" render={(props) =>
            <SetLists
              {...props}
              studySets={this.state.studySets} card={this.state.studySets.card} idx={this.state.studySets.idx}
            />
          } />
          <Route exact path="/flashcard/:studySetId" render={(props) =>
            <FlashCard
              studySet={this.state.studySets.find(s => s._id === props.match.params.studySetId)}
            />
          } />
          <Route exact path="/flashcards/:studySetId" render={(props) =>
            <FlashCards
              studySet={this.state.studySets.find(s => s._id === props.match.params.studySetId)}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;

