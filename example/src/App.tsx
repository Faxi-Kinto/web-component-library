import React, { useState } from 'react';
import { Button, Input, ToggleButton } from 'web-component-library';
import Icon from 'fontAwesomeConfig';
import 'index.css';

const App = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div style={{ width: '500px' }}>
      <Input label="Input field" placeholder="You could type" />
      <Button>You could click</Button>
      <Icon name="eye" size={'14px'} />
      <ToggleButton
        toggleOnLabel="Enabled"
        toggleOffLabel="Disabled"
        primaryColor="blue"
        secondaryColor="lightblue"
        value={toggled}
        onChange={() => setToggled(!toggled)}
      />
    </div>
  );
};

export default App;
