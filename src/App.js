import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './css/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}
export default App;
