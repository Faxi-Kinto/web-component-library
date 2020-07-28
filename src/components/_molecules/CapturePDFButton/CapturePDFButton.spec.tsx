import React from 'react';
import renderer from 'react-test-renderer';
import CapturePDFButton from './CapturePDFButton.component';

test('CapturePDFButton renders correctly', () => {
  const component = renderer.create(<CapturePDFButton />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
