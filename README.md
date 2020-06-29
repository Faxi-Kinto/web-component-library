# Faxi-Kinto web component library

![CI](https://github.com/Faxi-Kinto/web-component-library/workflows/CI/badge.svg)

## Overview
[Storybook URL](https://faxi-cl-storybook-develop.herokuapp.com)

## Intro

Before you is a React component library based on the components used in the `Create a Community - Kinto-Join` app.

The package is generated using `rollup`.

- Run `npm build` to build the package.
- Run `npm start` to run the package in watch mode.

Transpiled files are located in the `/build` folder.

## Install

```bash
npm i @faxi/web-component-library
```

## Usage

```tsx
import React from 'react';

import { Button } from '@faxi/web-component-library';

const MyClass: React.FC = (): JSX.Element => {
  render() {
    return <Button />;
  }
}
```

The package knows its types, meaning that IntelliSense aids you when using package's components and shows all of the possible props and their definitions.

## Icons (Font Awesome)

This package provides an `Icon` component which wraps [Fort Awesome](https://fortawesome.com/)'s instance `FontAwesomeIcon` from `@fortawesome/react-fontawesome`.

Up to the user is to define which libraries should be added and how the name-mapping function behaves.

Let's look at an example:

Create a: `fontAwesomeConfig.ts` file in the `src` folder of your project.

```ts
import { setLibraries } from '@faxi/web-component-library';
import { fad } from '@fortawesome/pro-duotone-svg-icons';

setLibraries([fad]);
```

You should install the `@fortawesome/...` family package of your choice in your project and then add it to the array of the `setLibraries` function exported by this package.

Next, define your type of possible icons (this will be a subset of `IconProp` exported by `@fortawesome/fontawesome-svg-core`).

```ts
export type MyIcons = 'sort-up' | 'sort-down';
```

Next, you have to define your own name-mapping function and override the package's one.

```ts
import {
  setLibraries,
  setMapNamePropToFaNames,
} from '@faxi/web-component-library';

...

const customMapNameToFa = (iconName: MyIcons): IconProp => {
  switch (iconName) {
    case 'sort-up':
      return ['fad', 'sort-up'];

    case 'sort-down':
      return ['fad', 'sort-down'];

    default:
      return ['fad', 'sort-up'];
  }
};

setMapNamePropToFaNames(customMapNameToFa);
```

Finally, export the package's Icon, wrapped in your type:

```ts
...

export default Icon as React.FC<IconProps<MyIcons>>;
```

## Tests

Every component is provided with its test file. Run `npm run test` within the package to run tests.

## Storybook

Every component can be previewed (in isolation) within the `Storybook` UI.

Run `npm run storybook` to build the storybook.

## License

MIT ©
