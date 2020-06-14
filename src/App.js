import React, { Component } from 'react';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './components/dashboard/Dashboard'
import CreateStudent from './components/student/CreateStudent';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route exact path='/add-student' component={CreateStudent} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
