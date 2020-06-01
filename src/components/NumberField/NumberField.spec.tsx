import React from 'react';
import renderer from 'react-test-renderer';

import NumberField from './NumberField.component';
import { DropdownItem } from '../DropdownList';

const listArray = [
  { value: '00381', label: '+381' },
  { value: '00434', label: '+434' },
  { value: '00321', label: '+321' },
  { value: '0044', label: '+44' },
  { value: '001', label: '+1' },
] as DropdownItem[];
test('NumberField renders correctly', () => {
  const component = renderer.create(
    <NumberField
      error={'Some error message'}
      list={listArray}
      description={'Description message'}
    />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
