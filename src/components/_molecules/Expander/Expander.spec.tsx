import React from 'react';
import renderer from 'react-test-renderer';
import Expander from './Expander.component';

test('Expander renders correctly', () => {
  const component = renderer.create(
    <Expander
      label={'Explanation'}
      text={`This graph shows the number of users who have successfully joined your community. 
  The higher the number, the easier it is for people to find someone else to share their journeys with. 
  Increase it by inviting more people or talk to your account manager about how you can promote your community.`}
      // eslint-disable-next-line jsx-a11y/alt-text
      icon={<img style={{ width: '14px' }} src="assets/icons/angle-down.svg" />}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
