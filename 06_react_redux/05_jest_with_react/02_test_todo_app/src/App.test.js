import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wapiti from "wapiti";


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
    <App />);
  expect(app.text()).toEqual("Add");
  app.setState({ tasks: ["exo1","exo2"] });

  expect(app.find("li").length).toBe(2);

  app.setState({ newTask: "exo3" });
  app.find("form").simulate('Submit', { preventDefault() {}});
  expect(app.find("li").length).toBe(3);

});

test("should display a counter starting at 0", () => {
  expect.assertions(1);
  return Wapiti.goto("http://localhost:3000")
    .capture(() => document.querySelector("#addbutton").textContent)
    .run()
    .then(result => {
      expect(result).toBe("Add");
    });
});
