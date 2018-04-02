import React from 'react';
import Checkbox from '../CheckBox';
import {shallow, mount, render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });


test('Component can start unchecked', () => {
  const checkbox = mount(<Checkbox />);
  expect(checkbox.state('checked')).toEqual(false);
  expect(checkbox.find('.Checkbox').hasClass('checked')).toEqual(false);
});

test('Component can start checked', () => {
  const checkbox = mount(<Checkbox checked={true} />);
  expect(checkbox.state('checked')).toEqual(true);
  expect(checkbox.find('.Checkbox').hasClass('checked')).toEqual(true);
});

test('Component state is toggled when clicked', () => {
  const checkbox = mount(<Checkbox />);
  let input = checkbox.find('.Checkbox__input');
  input.simulate('change', {target:{checked: true }});
  expect(checkbox.state('checked')).toEqual(true);
  expect(checkbox.find('.Checkbox').hasClass('checked')).toEqual(true);
  input.simulate('change', {target:{checked: false }});
  expect(checkbox.state('checked')).toEqual(false);
  expect(checkbox.find('.Checkbox').hasClass('checked')).toEqual(false);
});