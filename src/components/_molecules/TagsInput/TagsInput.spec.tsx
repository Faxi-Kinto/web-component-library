import React from 'react';
import renderer from 'react-test-renderer';
import TagsInput from './TagsInput.component';

test('TagInput renders correctly', () => {
  const component = renderer.create(<TagsInput placeholder="tags" />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
