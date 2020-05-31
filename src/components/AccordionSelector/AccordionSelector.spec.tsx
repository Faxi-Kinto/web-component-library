import React from 'react';
import renderer from 'react-test-renderer';

import AccordionSelector from './AccordionSelector.component';

test('AccordionSelector renders correctly', () => {
  const component = renderer.create(
    <AccordionSelector
      name={'test'}
      options={[
        {
          label: 'Admin',
          child: (
            <div>
              Admin <button>Ok</button>
            </div>
          ),
          text:
            'Choose this option if you don’t intend to carpool yourself. Don’t worry, you can change your mind later.',
        },
        {
          label: 'Carpooler',
          child: <div>Carpooler</div>,
          text: 'Choose this option if you intend to carpool as well.',
        },
      ]}
    />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
