import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="navigation">
        <nav className="nav">
          <h1>Math Magicians</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/quote">Quote</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}
export default Nav;
