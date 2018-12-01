
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import Home from '../../components/HomePage/Home';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import SetForm from '../../components/SetForm/SetForm';
import SetLists from '../../components/SetLists/SetLists';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studySets: [],
      user: {}
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
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    var user = userService.getUser();
    if (user) { 
      this.setState({ user });
      // TODO: get the user's studySets and update state
      
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
              handleDisplayStudySet={this.handleDisplayStudySet} 
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;

