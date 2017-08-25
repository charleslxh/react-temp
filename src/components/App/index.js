import React from 'react';
import { Route, Link } from 'react-router-dom';

import Header from 'COMPONENTS/Header'
import Home from 'COMPONENTS/Home'
import About from 'COMPONENTS/About'
import Counter from 'COMPONENTS/Counter'
import Counter2 from 'COMPONENTS/Counter2'

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
          <Route exact path="/counter2" component={Counter2} />
        </div>
        <div>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/counter2">Counter2</Link></li>
        </div>
      </div>
    )
  }
}

export default App
