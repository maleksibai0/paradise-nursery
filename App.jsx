import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <header>
          <h1>Paradise Nursery</h1>
          <Link to="/get-started">
            <button>Get Started</button>
          </Link>
        </header>

        <Switch>
          <Route path="/get-started">
            {/* Add your Get Started content here */}
          </Route>
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;