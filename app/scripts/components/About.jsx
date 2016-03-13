import React from 'react';
import shouldComponentUpdate from '../utils/PureRender';
import config from '../config';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: true,
      items: config.items
    };
  }

  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const items = this.state.items.map((item, i) => {
      const key = Object.keys(item);
      return (
        <div key={i} className="col-xs-12 col-sm-6 col-md-4">
          <div className="item">
            <h3>{key}</h3>
            {item[key]}
          </div>
        </div>
      );
    });

    return (
      <div key="About" className="home">
        <div className="row">{items}</div>
      </div>
    );
  }
}

export default About;
