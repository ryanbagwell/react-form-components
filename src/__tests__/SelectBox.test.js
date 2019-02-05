import React from 'react';
import SelectBox from 'SelectBox';
import {shallow, mount, render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const stringChoices = [
  'Choice 1',
  'Choice 2',
  'Choice 3',
];

const objectChoices = [
  {
    displayName: 'Choice 1',
    value: 'Choice1',
  },
  {
    displayName: 'Choice 2',
    value: 'Choice2',
  },
  {
    displayName: 'Choice 3',
    value: 'Choice3',
  },
];


test('Choices can be a strings', () => {
  const selectbox = mount(<SelectBox choices={stringChoices} />);
  let options = selectbox.find('option');
  stringChoices.map((choice, i) => {
    expect(options.get(i + 1).props.value).toEqual(choice);
    expect(options.get(i + 1).props.children).toEqual(choice);
  })
});

test('Choices can be a objects', () => {
  const selectbox = mount(<SelectBox choices={objectChoices} />);
  let options = selectbox.find('option');
  objectChoices.map((choice, i) => {
    expect(options.get(i + 1).props.value).toEqual(choice.value);
    expect(options.get(i + 1).props.children).toEqual(choice.displayName);
  })
});


test('Can select a string choice and display the correct value', () => {
  const selectbox = mount(<SelectBox choices={stringChoices} />);
  stringChoices.map((choice, i) => {
    selectbox.find('select').simulate('change', {target:{value:choice}});
    expect(selectbox.find('.SelectBox__facade__label').get(0).props.children).toEqual(choice);
    expect(selectbox.state('selectedChoice').value).toEqual(choice);
  });

});

test('Can select an object choice and display the correct value', () => {
  const selectbox = mount(<SelectBox choices={objectChoices} />);
  objectChoices.map((choice, i) => {
    selectbox.find('select').simulate('change', {target:{value:choice.value}});
    expect(selectbox.find('.SelectBox__facade__label').get(0).props.children).toEqual(choice.displayName);
    expect(selectbox.state('selectedChoice').value).toEqual(choice.value);
  });

});
