import React from 'react';
import renderer from 'react-test-renderer';
import Text from './Text.component';

test('Text Body renders correctly', () => {
  const component = renderer.create(
    <Text.Body>This is some body text.</Text.Body>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Text Heading with level 1 renders correctly', () => {
  const component = renderer.create(
    <Text.Heading level="1">This is a heading</Text.Heading>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Text Heading with level 2 renders correctly', () => {
  const component = renderer.create(
    <Text.Heading level="2">This is a heading</Text.Heading>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Text Heading with level 3 renders correctly', () => {
  const component = renderer.create(
    <Text.Heading level="3">This is a heading</Text.Heading>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Text Link renders correctly', () => {
  const component = renderer.create(<Text.Link>This is a link</Text.Link>);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
