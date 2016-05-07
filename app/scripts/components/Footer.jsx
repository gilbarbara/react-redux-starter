import React from 'react';
import shouldComponentUpdate from '../utils/PureRender';

class Footer extends React.Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <footer className="app__footer">
        <div className="app__container">
          <h3>Powered by:</h3>

          <ul className="tech list-unstyled">
            <li>
              <a href="http://facebook.github.io/react/" target="_blank">
                <img src="http://svgporn.com/logos/react.svg" width="96" alt="React" />
              </a>
            </li>
            <li>
              <a href="http://redux.js.org/" target="_blank">
                <img src="http://svgporn.com/logos/redux.svg" width="96" alt="Redux" />
              </a>
            </li>
            <li>
              <a href="https://webpack.github.io/" target="_blank">
                <img src="http://svgporn.com/logos/webpack.svg" width="96" alt="Webpack" />
              </a>
            </li>
            <li>
              <a href="https://babeljs.io/" target="_blank">
                <img src="http://svgporn.com/logos/babel.svg" width="96" alt="Babel" />
              </a>
            </li>
            <li>
              <a href="http://sass-lang.com/" target="_blank">
                <img src="http://svgporn.com/logos/sass.svg" width="96" alt="Sass" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
