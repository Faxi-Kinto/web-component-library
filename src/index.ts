import { createGlobalStyle } from 'styled-components';
/*
 * Atoms
 */
export { default as Button } from './components/atoms/Button';
export { default as Icon } from './components/atoms/Icon';
export { default as Image } from './components/atoms/Image';
export { default as Input } from './components/atoms/Input';
export { default as Label } from './components/atoms/Label';
export { default as Spinner } from './components/atoms/Spinner';

/*
 * Molecules
 */
export { default as InfoBox } from './components/molecules/InfoBox';

/*
 * Organisms
 */
export { default as Modal } from './components/organisms/Modal';

/*
 * Prop Types
 */
export { IconProp as IconTouple } from '@fortawesome/fontawesome-svg-core';
export { IconProps } from './components/atoms/Icon/Icon.component';
export { InputProps } from './components/atoms/Input/Input.component';

export const GlobalStyle = createGlobalStyle`
    @import url('./styles.css');
`;

export * from './setupFontAwesome';
