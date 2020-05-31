import React from 'react';
import renderer from 'react-test-renderer';

import RadioGroup from './RadioGroup.component';

test('RadioGroup renders correctly', () => {
  const component = renderer.create(
    <RadioGroup
      name="test"
      options={[
        { label: 'test1', value: '1' },
        { label: 'test2', value: '2' },
        { label: 'test3', value: '3' },
      ]}
    />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
