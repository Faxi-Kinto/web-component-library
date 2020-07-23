import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chart from './Chart.component';

test('Chart renders correctly', () => {
  const renderer = ShallowRenderer.createRenderer();

  const component = renderer.render(
    <Chart
      title="Number of messages"
      chartHeight="100%"
      chartType="line"
      series={[
        {
          data: [
            {
              x: new Date('2020-06-05').getTime(),
              y: 2,
            },
            {
              x: new Date('2020-06-15').getTime(),
              y: 5,
            },
            {
              x: new Date('2020-06-30').getTime(),
              y: 7,
            },
          ],
          name: 'Messages',
        },
      ]}
      colors={['#81C8D1']}
      gradientToColors={['#00708D']}
      strokeWidths={[2]}
      xAxisMinMiliseconds={new Date('06/01/2020').getTime()}
      xAxisMaxMiliseconds={new Date('07/01/2020').getTime()}
      markerStrokeColors={['#00A5B5']}
    />
  );

  expect(component).toMatchSnapshot();
});
