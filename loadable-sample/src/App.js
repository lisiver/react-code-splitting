import React, { Component, Suspense } from 'react';
import { Route, Link } from 'react-router-dom';
import { About, Home, SplitMe } from './pages';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  handleClick = () => {
    import('./notify').then(({ default: notify }) => {
      notify();
    });
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/splitme">SplitMe</Link>
          </li>
          <li>
            <button type="button" onClick={this.handleClick}>onClick</button>
          </li>
        </ul>
        <hr />
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/splitme" component={SplitMe} />
        </Suspense>
      </div>
    );
  }
}

export default App;
