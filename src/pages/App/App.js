import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MonsterDisplayPage from '../MonsterDisplayPage/MonsterDisplayPage'
import AddMonsterPage from '../../pages/AddMonsterPage/AddMonsterPage';
import * as monsterAPI from '../../services/monster-api';
import * as userAPI from '../../services/user-api';
import Monster from '../../components/Monster/Monster'
import NavBar from '../../components/NavBar/NavBar'

class App extends Component {
  state = {
    // Initialize user if there's a token, otherwise null
    user: userAPI.getUser(),
    monsters: []
  };

  /*--------------------------- Callback Methods ---------------------------*/

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  }

  /*-------------------------- Lifecycle Methods ---------------------------*/

  async componentDidMount() {
    const monsters = await monsterAPI.getAll();
    this.setState({ monsters });
  }

  handleAddMonster = async newMonsterData => {
    const newMonster = await monsterAPI.create(newMonsterData);
    this.setState(state => ({
      monsters: [...state.monsters, newMonster]
    }), () => this.props.history.push('/'));
  }

  /*-------------------------------- Render --------------------------------*/

  render() {
    return (
      <div className="App">
        <h1>Monster Academy</h1>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/' render={() => 
            userAPI.getUser() ? 
              <MonsterDisplayPage 
              monsters={this.state.monsters}
              />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/' render={({history}) => 
          <MonsterDisplayPage
            monsters={this.state.monsters}
          />
        } />
          <Route exact path='/add' render={() => 
          <AddMonsterPage
            handleAddMonster = {this.handleAddMonster}
          />
        } />
        </Switch>
      </div>
    );
  }
}

export default App;
