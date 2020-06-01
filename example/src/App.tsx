import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  StepProvider,
  Form,
  FormField,
  InputField,
} from 'web-component-library';
import { Step } from 'web-component-library/components/StepsProvider/context';

const TestForm = () => (
  <Form onSubmit={(data) => console.log(data)}>
    <FormField name="test" component={InputField} />
    <h1>some text</h1>
  </Form>
);

export const stepConfig: Step[] = [
  {
    handle: 'hello',
    path: '/hello-world',
    component: TestForm,
    exact: true,
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <StepProvider steps={stepConfig}>
        <Switch>
          {stepConfig.map(({ handle, path, component, exact }) => (
            <Route
              key={path}
              handle={handle}
              path={path}
              exact={exact}
              component={component}
            />
          ))}
        </Switch>
      </StepProvider>
    </BrowserRouter>
  );
};

export default App;
