import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <App> my app </App>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test(' check text', () => {
  const app = shallow(
    <App  />
  );
  expect(app.text()).toEqual("<Board />Next player: X");
});
