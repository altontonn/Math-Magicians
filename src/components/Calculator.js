// eslint-disable-line
import React, { useState } from 'react';
import '../css/style.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickButton = (e) => {
    const result = calculate(state, e.target.textContent);
    setState(result);
  };

  const createNumbers = () => {
    const digits = [];
    for (let i = 1; i < 10; i += 1) {
      digits.push(
        <button
          className="btn-grid"
          key={i}
          onClick={clickButton}
          type="button"
        >
          {i}
        </button>,
      );
    }
    return digits;
  };

  return (
    <div className="calc">
      <h1>Math Magicians</h1>
      <p>Let&rsquo;s do some Maths!</p>
      <div className="App">
        <div className="calculator">
          <div className="display">
            <span data-testid="result">
              {state.total}
              {state.operation}
              {state.next}
            </span>
          </div>
          <div className="operators">
            <button
              className="item"
              data-testid="test-1"
              onClick={clickButton}
              type="button"
            >
              AC
            </button>
            <button className="item" onClick={clickButton} type="button">
              +/-
            </button>
            <button className="item" onClick={clickButton} type="button">
              %
            </button>
            {createNumbers()}
            <button className="item-1" onClick={clickButton} type="button">
              &divide;
            </button>
            <button className="item-2" onClick={clickButton} type="button">
              x
            </button>
            <button className="item-3" onClick={clickButton} type="button">
              -
            </button>
            <button className="item-4" onClick={clickButton} type="button">
              +
            </button>
            <button className="item-5" onClick={clickButton} type="button">
              =
            </button>
            <button className="item-6" onClick={clickButton} type="button">
              0
            </button>
            <button className="item" onClick={clickButton} type="button">
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
