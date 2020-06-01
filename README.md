# web-component-library

>

<!-- TODO: add npm reference -->
<!-- [![NPM](https://img.shields.io/npm/v/web-component-library.svg)](https://www.npmjs.com/package/web-component-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->

## Intro

Before you is a React component library based on the components used in the `Create a Community - Kinto-Join` app.

The package is generated using `tsc` and `webpack`.

Webpack is purely used to handle `*.css` files. Tsc transpiles all of the `*.ts/*.tsx` files.

- Run `yarn build` to consecutively run webpack and tsc.
- Run `yarn start` to run (concurrently) both webpack and tsc in watch mode.

Transpiled files are located in the `/dist` folder.

## Install

<!-- TODO:  -->
<!-- ```bash
npm install --save web-component-library
``` -->

## Usage

```tsx
import React from 'react';

import { Button } from 'web-component-library';

const MyClass: React.FC = (): JSX.Element => {
  render() {
    return <Button />;
  }
}
```

The package knows its types, meaning that IntelliSense aids you when using package's components and shows all of the possible props and their definitions.

## Example

The package provides an `example` project, generated with `create-react-app`, which shows basic usage of this package.

## Tests

Every component is provided with its test file. Run `yarn test` to run tests.

## License

MIT © [](https://github.com/)
