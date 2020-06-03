import React from 'react';
import renderer from 'react-test-renderer';
import SubNavigation from './SubNavigation.component';
import { NavLink } from './';

test('SubNavigation renders correctly', () => {
  const data = [
    { name: 'Test 1', route: '' },
    { name: 'Test 2', route: '' },
    { name: 'Test 3', route: '' },
    { name: 'Test 4', route: '' },
  ] as NavLink[];

  const component = renderer.create(<SubNavigation links={data} />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
