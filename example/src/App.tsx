import React from 'react';
import { Button, Input } from 'web-component-library';
import Icon from 'fontAwesomeConfig';
import 'index.css';

const App = () => {
  return (
    <div style={{ width: '500px' }}>
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
