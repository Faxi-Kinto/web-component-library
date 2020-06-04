# Faxi-Kinto web component library

[![NPM](https://img.shields.io/npm/v/faxi-kinto-component-library.svg)](https://www.npmjs.com/package/faxi-kinto-component-library)

## Intro

Before you is a React component library based on the components used in the `Create a Community - Kinto-Join` app.

The package is generated using `rollup`.

- Run `npm build` to build the package.
- Run `npm start` to run the package in watch mode.

Transpiled files are located in the `/build` folder.

## Install

```bash
npm i faxi-kinto-component-library
```

## Usage

```tsx
import React from 'react';

import { Button } from 'faxi-kinto-component-library';

const MyClass: React.FC = (): JSX.Element => {
  render() {
    return <Button />;
  }
}
```

The package knows its types, meaning that IntelliSense aids you when using package's components and shows all of the possible props and their definitions.

## Tests

Every component is provided with its test file. Run `npm run test` within the package to run tests.

## Storybook

Every component can be previewed (in isolation) within the `Storybook` UI.

Run `npm run storybook` to build the storybook.

## License

MIT ©
