import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from './Dropdown.component';

test('Dropdown renders correctly', () => {
  const component = renderer.create(
    <Dropdown
      options={[
        { label: 'Show all members', value: 'o1' },
        { label: 'option2option2option2option2option2', value: 'o2' },
        { label: 'option3', value: 'op3' },
      ]}
      placeholder="Placeholder"
      type="select"
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
