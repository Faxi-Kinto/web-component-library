import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Modal from './Modal.component';

test('Modal renders correctly', () => {
  const renderer = ShallowRenderer.createRenderer();

  const component = renderer.render(
    <Modal
      toggled={true}
      title="Test"
      body="test body"
      footer={<button>test</button>}
    />
  );

  expect(component).toMatchSnapshot();
});
