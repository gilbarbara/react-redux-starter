import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import About from '../../containers/About';

function setup() {
  const props = {
    ready: true
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<About { ...props } />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}
describe('About', () => {
  it('should render properly', () => {
    const { output } = setup(true);

    expect(output.props.className).toBe('home');
    expect(output.props.children.props.className).toBe('row');
    expect(output.props.children.props.children.length).toBe(6);
  });
});
