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
            { x: new Date(1593993600000), y: 2 },
            { x: new Date(1594080000000), y: 2 },
            { x: new Date(1594166400000), y: 0 },
            { x: new Date(1594252800000), y: 0 },
            { x: new Date(1594339200000), y: 1 },
            { x: new Date(1594425600000), y: 0 },
            { x: new Date(1594512000000), y: 0 },
            { x: new Date(1594598400000), y: 0 },
            { x: new Date(1594684800000), y: 0 },
            { x: new Date(1594771200000), y: 0 },
            { x: new Date(1594857600000), y: 0 },
            { x: new Date(1594944000000), y: 0 },
            { x: new Date(1595030400000), y: 0 },
            { x: new Date(1595116800000), y: 0 },
            { x: new Date(1595203200000), y: 0 },
            { x: new Date(1595289600000), y: 0 },
            { x: new Date(1595376000000), y: 1 },
            { x: new Date(1595462400000), y: 0 },
            { x: new Date(1595548800000), y: 0 },
            { x: new Date(1595635200000), y: 0 },
            { x: new Date(1595721600000), y: 0 },
            { x: new Date(1595808000000), y: 0 },
            { x: new Date(1595894400000), y: 0 },
            { x: new Date(1595980800000), y: 0 },
            { x: new Date(1596067200000), y: 0 },
            { x: new Date(1596153600000), y: 0 },
            { x: new Date(1596240000000), y: 0 },
            { x: new Date(1596326400000), y: 0 },
            { x: new Date(1596412800000), y: 0 },
            { x: new Date(1596499200000), y: 0 },
            { x: new Date(1596585600000), y: 2 },
            { x: new Date(1596672000000), y: 1 },
          ],
          name: 'Messages',
        },
      ]}
      colors={['#81C8D1']}
      gradientToColors={['#00708D']}
      strokeWidths={[2]}
      xAxisMinMiliseconds={new Date(1593993600000).getTime()}
      xAxisMaxMiliseconds={new Date(1596672000000).getTime()}
      markerStrokeColors={['#00A5B5']}
      yAxisTickInterval={2}
    />
  );

  expect(component).toMatchSnapshot();
});
