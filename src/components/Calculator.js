// eslint-disable-line
import React, { Component } from 'react';
import '../css/style.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'AC' };
  }

  createNumbers = () => {
    const digits = [];
    for (let i = 1; i < 10; i += 1) {
      digits.push(
        <button className="btn-grid" type="button" key={i}>{i}</button>,
      );
    }
    return digits;
  }

  render() {
    const { message } = this.state;
    return (
      <div className="App">
        <div className="calculator">
          <div className="display">
            <span>0</span>
          </div>
          <div className="operators">
            <button className="item" type="button">{ message }</button>
            <button className="item" type="button">+/-</button>
            <button className="item" type="button">%</button>
            { this.createNumbers() }
            <button className="item-1" type="button">/</button>
            <button className="item-2" type="button">*</button>
            <button className="item-3" type="button">-</button>
            <button className="item-4" type="button">+</button>
            <button className="item-5" type="button">=</button>
            <button className="item-6" type="button">0</button>
            <button className="item" type="button">.</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
