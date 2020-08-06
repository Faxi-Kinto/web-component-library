import React from 'react';
import renderer from 'react-test-renderer';
import Expander from './Expander.component';

test('Expander renders correctly', () => {
  const component = renderer.create(
    <Expander
      title="Explanation"
      body="This graph shows the number of users who have successfully joined your community. 
  The higher the number, the easier it is for people to find someone else to share their journeys with. 
  Increase it by inviting more people or talk to your account manager about how you can promote your community."
      icon={
        <img
          style={{ width: '14px' }}
          src="assets/icons/angle-down.svg"
          alt=""
        />
      }
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
