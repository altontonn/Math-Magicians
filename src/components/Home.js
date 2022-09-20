import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      para1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut ab harum? Molestias, reiciendis provident quod culpa magnam omnis ipsam consequuntur ad illum voluptate ratione a nostrum consequatur fugiat deleniti? Quas laborum alias, quia incidunt harum odio modi corporis quibusdam cum reiciendis, aperiam in quis ipsam, odit qui? Illo, facilis alias nesciunt magnam saepe neque exercitationem dignissimos voluptas sint nulla',
    };
  }

  render() {
    const { para1 } = this.state;
    return (
      <div className="home">
        <h1>Math Magicians</h1>
        <p className="header">Welcome to our page!</p>
        <p className="p1">{para1}</p>
        <p className="p2">{para1}</p>
      </div>
    );
  }
}
export default Home;
