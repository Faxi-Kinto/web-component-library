import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from './Dropdown.component';

test('Dropdown renders correctly', () => {
  const component = renderer.create(
    <Dropdown
      optionList={[
        { text: 'Show all members', value: 'o1' },
        { text: 'option2option2option2option2option2', value: 'o2' },
        { text: 'option3', value: 'op3' },
      ]}
      placeholder="Placeholder"
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
