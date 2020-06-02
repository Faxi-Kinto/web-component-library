# Faxi-Kinto web component library

[![NPM](https://img.shields.io/npm/v/@faxi-kinto/component-library.svg)](https://www.npmjs.com/package/@faxi-kinto/component-library)

## Intro

Before you is a React component library based on the components used in the `Create a Community - Kinto-Join` app.

The package is generated using `tsc` and `webpack`.

Webpack is purely used to handle `*.css` files. Tsc transpiles all of the `*.ts/*.tsx` files.

- Run `yarn build` to consecutively run webpack and tsc.
- Run `yarn start` to run (concurrently) both webpack and tsc in watch mode.

Transpiled files are located in the `/dist` folder.

## Install

```bash
npm i @faxi-kinto/component-library
```

## Usage

```tsx
import React from 'react';

import { Button } from '@faxi-kinto/component-library';

const MyClass: React.FC = (): JSX.Element => {
  render() {
    return <Button />;
  }
}
```

The package knows its types, meaning that IntelliSense aids you when using package's components and shows all of the possible props and their definitions.

## Tests

Every component is provided with its test file. Run `yarn test` within the package to run tests.

### Note

If your project uses `Jest` for testing, you must add

```js
moduleNameMapper: {
  '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
}
```

and a dummy:

`__mocks__/styleMock.js`

that just exports a dummy object:

`module.exports = {};`

This is due to the fact that this package provides a plain `styles.css` file for global package styling configuration and `Jest` gets confused when importing css in ts.

## License

MIT ©
