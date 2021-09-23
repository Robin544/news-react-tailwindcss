import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './details';
import List from './list';

function App() {
  return (
    <div className="container w-full p-0 m-0">
      <Router>
        <Switch>
          <Route exact path='/' component={List} />
          <Route path='/details/:id' component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
