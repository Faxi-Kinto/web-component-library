import { createGlobalStyle } from 'styled-components';
/*
 * Atoms
 */
export { default as Button } from './components/atoms/Button';
export { default as Icon } from './components/atoms/Icon';
export { default as Image } from './components/atoms/Image';
export { default as Input } from './components/atoms/Input';
export { InputProps } from './components/atoms/Input/Input.component';
export { default as Spinner } from './components/atoms/Spinner';

/*
 * Molecules
 */
export { default as InfoBox } from './components/molecules/InfoBox';

/*
 * Organisms
 */
export { default as Modal } from './components/organisms/Modal';

export { IconProps } from './components/atoms/Icon/Icon.component';

export { IconProp as IconTouple } from '@fortawesome/fontawesome-svg-core';

export const GlobalStyle = createGlobalStyle`
    @import url('./styles.css');
`;

export * from './setupFontAwesome';
