import React from 'react';
import FormProgression from '.';
import renderer from 'react-test-renderer';
import { FormProgressionProps } from './FormProgression.component';
import Icon from 'components/Icon';

let wrapper: renderer.ReactTestRenderer;

const props: FormProgressionProps = {
  stages: [
    { name: 'Your Details' },
    { name: 'Create a password' },
    { name: 'Your Community Details' },
    { name: 'Community Address' },
    { name: 'Your Role' },
    { name: 'Privacy Settings' },
  ],
  labelName: 'Step',
  currentStage: 1,
};

test('FormProgression renders correctly', () => {
  wrapper = renderer.create(<FormProgression {...props} />);
  const container = wrapper.toJSON();
  expect(container).toMatchSnapshot();
});

test('CSS classes are assigned depending on currentStage prop', () => {
  props.currentStage = 6;
  wrapper.update(<FormProgression {...props} />);

  expect(wrapper.root.findAllByType(Icon).length).toBe(6);
});
