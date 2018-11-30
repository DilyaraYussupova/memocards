
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import Home from '../../components/HomePage/Home';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import SetForm from '../../components/SetForm/SetForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      set: null,
      user: {}
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignuporLogin = () =>
    this.setState({ user: userService.getUser() });


  handleCreateProfile = () => {
    this.setState({ user: userService.getUser() });
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    this.setState({ user: userService.getUser(), set: userService.getUser() && userService.getUser().set });
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
          <Route exact path="/create" component={() =>
            <SetForm set={this.state.set} setSet={this.setSet} user={this.state.user} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

