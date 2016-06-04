import React from 'react';
import shouldComponentUpdate from 'utils/PureRender';
import config from 'config';

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
    const items = this.state.items.map((item, i) =>
      (<div key={i} className="col-xs-12 col-sm-6 col-lg-4">
        <div className="item">
          <div className="item__logo">
            <img src={item.logo} alt={item.name} />
          </div>

          <div className="item__info">
            <h3>{item.name}</h3>
            <div>{item.version}</div>
          </div>
        </div>
      </div>)
    );

    return (
      <div key="About" className="about">
        <h1>Powered by:</h1>
        <div className="row">{items}</div>
      </div>
    );
  }
}

export default About;
