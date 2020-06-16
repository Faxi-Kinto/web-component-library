import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Modal from './Modal.component';

test('Modal renders correctly', () => {
  const renderer = ShallowRenderer.createRenderer();

  const component = renderer.render(
    <Modal
      toggled={true}
      header={<span>Test</span>}
      body={<span>test body</span>}
      footer={<button>test</button>}
    />
  );

  expect(component).toMatchSnapshot();
});
