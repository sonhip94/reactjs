import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from './components/Menu';
import Routes from './routes'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            {this.showContentMenu(Routes)}
          </Switch>
      </div>
      </Router>
    );
  }

  showContentMenu = Routes => {
    var result = null;
    if(Routes.length>0){
      result = Routes.map((route,index)=>{
        return (
            <Route key={index} path={route.path} exact={route.exact} component={route.main} />
          );
      });
    }
    return result;
  }

}

export default App;
