import NPMPackage from '../../package.json';

export default {
  apiUrl: 'https://api.hypem.com/v2/',
  items: [
    {
      name: 'react',
      link: 'http://facebook.github.io/react/',
      logo: 'http://svgporn.com/logos/react.svg',
      version: NPMPackage.dependencies.react.replace(/~|\^/, '')
    },
    {
      name: 'redux',
      link: 'http://redux.js.org/',
      logo: 'http://svgporn.com/logos/redux.svg',
      version: NPMPackage.dependencies.redux.replace(/~|\^/, '')
    },
    {
      name: 'react-router',
      link: 'https://github.com/reactjs/react-router',
      logo: 'http://svgporn.com/logos/react-router.svg',
      version: NPMPackage.dependencies['react-router'].replace(/~|\^/, '')
    },
    {
      name: 'babel',
      link: 'https://babeljs.io/',
      logo: 'http://svgporn.com/logos/babel.svg',
      version: NPMPackage.devDependencies['babel-core'].replace(/~|\^/, '')
    },
    {
      name: 'webpack',
      link: 'https://webpack.github.io/',
      logo: 'http://svgporn.com/logos/webpack.svg',
      version: NPMPackage.devDependencies.webpack.replace(/~|\^/, '')
    },
    {
      name: 'node-sass',
      link: 'http://sass-lang.com/',
      logo: 'http://svgporn.com/logos/sass.svg',
      version: NPMPackage.devDependencies['node-sass'].replace(/~|\^/, '')
    }
  ]
};
