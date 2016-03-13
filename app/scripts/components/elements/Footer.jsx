import React from 'react';
import shouldComponentUpdate from '../../utils/PureRender';

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
                <img src="http://svgporn.com/logos/react.svg" width="96" />
              </a>
            </li>
            <li>
              <a href="http://browserify.org/" target="_blank">
                <img src="http://svgporn.com/logos/browserify-icon.svg" width="96" />
              </a>
            </li>
            <li>
              <a href="http://gulpjs.com/" target="_blank">
                <img src="http://svgporn.com/logos/gulp.svg" width="52" />
              </a>
            </li>
            <li>
              <a href="https://babeljs.io/" target="_blank">
                <img src="http://svgporn.com/logos/babel.svg" width="96" />
              </a>
            </li>
            <li>
              <a href="http://mochajs.org/" target="_blank">
                <img src="http://svgporn.com/logos/mocha.svg" width="64" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
