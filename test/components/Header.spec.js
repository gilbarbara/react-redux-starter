import expect, { createSpy } from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const goTo = createSpy();
const dispatch = createSpy();

const headerInjector = require('inject!components/Header');
const Header = headerInjector({
  'actions/index': { goTo }
}).Header;

function setup() {
  const props = {
    dispatch,
    location: {
      pathname: '/'
    }
  };

  return TestUtils.renderIntoDocument(
    <Header {...props} />
  );
}

describe('Header', () => {
  const render = setup();

  it('should be a Component', () => {
    expect(TestUtils.isCompositeComponent(render)).toBe(true);
  });

  it('should render properly', () => {
    const wrapper = TestUtils.findRenderedDOMComponentWithClass(render, 'app__header');
    expect(wrapper).toExist();

    const h1 = TestUtils.findRenderedDOMComponentWithTag(render, 'h1');
    expect(h1.innerHTML).toBe('react-redux-starter');
  });

  it('should have a navbar with links', () => {
    const nav = TestUtils.findRenderedDOMComponentWithClass(render, 'navbar-nav');
    expect(nav.className).toBe('nav navbar-nav');

    const [artists, popular, lastweek, about] = TestUtils.scryRenderedDOMComponentsWithTag(render, 'a');
    expect(artists.getAttribute('href')).toBe('/artists');
    expect(popular.getAttribute('href')).toBe('/popular');
    expect(lastweek.getAttribute('href')).toBe('/lastweek');
    expect(about.getAttribute('href')).toBe('/about');
  });

  it('should handle navbar clicks', () => {
    const [artists, popular, lastweek, about] = TestUtils.scryRenderedDOMComponentsWithTag(render, 'a');

    TestUtils.Simulate.click(artists);
    expect(goTo).toHaveBeenCalledWith(artists.getAttribute('href'));

    TestUtils.Simulate.click(popular);
    expect(goTo).toHaveBeenCalledWith(popular.getAttribute('href'));

    TestUtils.Simulate.click(lastweek);
    expect(goTo).toHaveBeenCalledWith(lastweek.getAttribute('href'));

    TestUtils.Simulate.click(about);
    expect(goTo).toHaveBeenCalledWith(about.getAttribute('href'));
  });
});
