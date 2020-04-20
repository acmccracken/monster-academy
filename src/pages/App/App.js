import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MonsterAcademyPage from '../MonsterAcademyPage/MonsterAcademyPage'
import MonsterDisplayPage from '../MonsterDisplayPage/MonsterDisplayPage'
import AddMonsterPage from '../../pages/AddMonsterPage/AddMonsterPage';
import EditMonsterPage from '../../pages/EditMonsterPage/EditMonsterPage';
import * as monsterAPI from '../../services/monster-api';
import * as userAPI from '../../services/user-api';
import NavBar from '../../components/NavBar/NavBar'

class App extends Component {
  state = {
    user: userAPI.getUser(),
    monsters: []
  };


  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  }


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

  handleDeleteMonster= async id => {
    await monsterAPI.deleteOne(id);
    this.setState(state => ({
      monsters: state.monsters.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }
  
  handleUpdateMonster = async updatedMonsterData => {
    const updatedMonster = await monsterAPI.update(updatedMonsterData);
    const newMonstersArray = this.state.monsters.map(p => 
      p._id === updatedMonster._id ? updatedMonster : p
    );
    this.setState(
      {monsters: newMonstersArray},
      () => this.props.history.push('/')
    );
  }

  /*-------------------------------- Render --------------------------------*/

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Monster Academy
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <main>
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
            <Route exact path='/' render={({history}) => 
              userAPI.getUser() ? 
            <MonsterAcademyPage
              monsters={this.state.monsters}
              handleDeleteMonster={this.handleDeleteMonster}
              user={this.state.user}
            />
            :
                <Redirect to='/login'/>
            
          } />
          <Route exact path='/all' render={({history}) => 
              userAPI.getUser() ? 
            <MonsterDisplayPage
              monsters={this.state.monsters}
              handleDeleteMonster={this.handleDeleteMonster}
              user={this.state.user}
            />
            :
                <Redirect to='/login'/>
            
          } />
            <Route exact path='/add' render={() => 
            <AddMonsterPage
              handleAddMonster = {this.handleAddMonster}
            />
          } />
          <Route exact path='/edit' render={({history, location}) => 
            <EditMonsterPage
              handleUpdateMonster={this.handleUpdateMonster}
              location={location}
            />
          } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
