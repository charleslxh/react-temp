import React from 'react';
import { Route, Link } from 'react-router-dom';

import Header from 'COMPONENTS/Header'
import Home from 'COMPONENTS/Home'
import About from 'COMPONENTS/About'
import Counter from 'COMPONENTS/Counter'

import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/counter" component={Counter} />
        </div>
        <div>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </div>
      </div>
    )
  }
}

export default App
