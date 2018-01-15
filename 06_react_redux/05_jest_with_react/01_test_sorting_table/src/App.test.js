import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Wapiti from 'wapiti';

import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

const products =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <App > my app </App>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test(' check text', () => {
  const app = shallow(
    <App lines={products} />
  );
  expect(app.text()).toEqual("IDTitlePrice80446222 guêtres RIDING noir14.998247793PALMES WADERS24.998249674BOBINE FUN 2 3 4mm X 40 20 12m6.998282689Corne chasse 14cm9.998298354OREILLER CONFORT6.998326155Pantalon Training mesh marine44.998329121COUTEAU A PALOURDES4.998353265Justaucorps manche longue Gym.34.998354464Basic L print Long Gold Fusion9.998357549MINIMIZER EDEN UNI  NOIR19.998370749Doudoune Hike 100 garçon bleu9.998379970Pantalon Gym12.998380024RUN ELIOPRIME54.99");

  app.find('th').at(2).simulate('click');

  expect(app.text()).toEqual("IDTitlePrice8329121COUTEAU A PALOURDES4.998298354OREILLER CONFORT6.998249674BOBINE FUN 2 3 4mm X 40 20 12m6.998282689Corne chasse 14cm9.998354464Basic L print Long Gold Fusion9.998370749Doudoune Hike 100 garçon bleu9.998379970Pantalon Gym12.9980446222 guêtres RIDING noir14.998357549MINIMIZER EDEN UNI  NOIR19.998247793PALMES WADERS24.998353265Justaucorps manche longue Gym.34.998326155Pantalon Training mesh marine44.998380024RUN ELIOPRIME54.99");

  app.find('th').at(1).simulate('click');

  expect(app.text()).toEqual("IDTitlePrice80446222 guêtres RIDING noir14.998249674BOBINE FUN 2 3 4mm X 40 20 12m6.998354464Basic L print Long Gold Fusion9.998329121COUTEAU A PALOURDES4.998282689Corne chasse 14cm9.998370749Doudoune Hike 100 garçon bleu9.998353265Justaucorps manche longue Gym.34.998357549MINIMIZER EDEN UNI  NOIR19.998298354OREILLER CONFORT6.998247793PALMES WADERS24.998379970Pantalon Gym12.998326155Pantalon Training mesh marine44.998380024RUN ELIOPRIME54.99");


});


test("should display a counter starting at 0", () => {
  expect.assertions(1);
  return Wapiti.goto("http://localhost:3000")
    .capture(() => document.querySelector("#th1").textContent)
    .run()
    .then(result => {
      expect(result).toBe("ID");
    });
});
