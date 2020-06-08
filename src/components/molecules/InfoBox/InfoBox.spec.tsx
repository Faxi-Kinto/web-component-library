import React from 'react';
import renderer from 'react-test-renderer';
import InfoBox from './InfoBox.component';

test('InfoBox renders correctly', () => {
  const component = renderer.create(
    <InfoBox>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </InfoBox>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
