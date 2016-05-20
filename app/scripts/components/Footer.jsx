import React from 'react';
import shouldComponentUpdate from 'utils/PureRender';

class Footer extends React.Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <footer className="app__footer">
        <div className="app__container">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=gilbarbara&amp;repo=react-redux-starter&amp;type=star&amp;count=true"
            frameBorder="0"
            scrolling="0"
            width="110px"
            height="20px" />
          <iframe
            src="https://ghbtns.com/github-btn.html?user=gilbarbara&amp;type=follow&amp;count=true"
            frameBorder="0"
            scrolling="0"
            width="130px"
            height="20px" />
        </div>
      </footer>
    );
  }
}

export default Footer;
