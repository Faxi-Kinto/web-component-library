import React from 'react';
import renderer from 'react-test-renderer';
import DropdownList from './DropdownList.component';
import { DropdownItem } from './';

const listItems = [
  { value: 'test1', label: 'Test value 1' },
  { value: 'test2', label: 'Test value 2' },
  { value: 'test3', label: 'Test value 3' },
  { value: 'test4', label: 'Test value 4' },
  { value: 'test5', label: 'Test value 5' },
] as DropdownItem[];

test('DropdownList renders correctly', () => {
  const component = renderer.create(<DropdownList list={listItems} />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
