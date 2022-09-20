import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Mathematics is not about numbers, equations, computations, or algorithims. It is about understanding. -William Paul Thurston',
    };
  }

  render() {
    const { message } = this.state;
    return (
      <div className="content">
        <p>{message}</p>
      </div>
    );
  }
}
export default Quote;
