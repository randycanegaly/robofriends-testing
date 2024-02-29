import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('renders without crashing', () => {
  expect.assertions(1);
  // expect (shallow(<Card/>).length).toEqual(1);
  expect(shallow(<Card/>)).toMatchSnapshot();
});