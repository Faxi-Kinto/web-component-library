import React from 'react';
import { Button, Input, Chart } from 'web-component-library';
import Icon from 'fontAwesomeConfig';
import 'index.css';

const App = () => {
  return (
    <div style={{ width: '500px' }}>
      <Chart
        title="Number of messages"
        height="100%"
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
        xAxisCssClass="chart-class"
        markerStrokeColors={['#00A5B5']}
      />
      <Input label="Input field" placeholder="You could type" />
      <Button
        background="darkred"
        fontColor="white"
        width="300px"
        height="50px"
      >
        You could click
      </Button>
      <Icon name="eye" size={'14px'} />
    </div>
  );
};

export default App;
