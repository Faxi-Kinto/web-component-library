import { createGlobalStyle } from 'styled-components';
/*
 * Atoms
 */
export { default as Button } from './components/atoms/Button';
export { default as Icon } from './components/atoms/Icon';
export { default as Image } from './components/atoms/Image';
export { default as Input } from './components/atoms/Input';
export { default as Label } from './components/atoms/Label';
export { default as ParallaxBackground } from './components/atoms/ParallaxBackground';
export { default as Spinner } from './components/atoms/Spinner';
export { default as Text } from './components/atoms/Text';

/*
 * Molecules
 */
export { default as Checkbox } from './components/molecules/Checkbox';
export { default as NavigationLinks } from './components/molecules/NavigationLinks';

/*
 * Organisms
 */
export { default as Modal } from './components/organisms/Modal';

/*
 * Prop Types
 */
export { IconProps } from './components/atoms/Icon/Icon.component';
export { InputProps } from './components/atoms/Input/Input.component';
export { CheckboxProps } from './components/molecules/Checkbox/Checkbox.component';

/*
 * Types
 */
export { NavLink } from './components/molecules/NavigationLinks/NavigationLinks.component';

export const GlobalStyle = createGlobalStyle`
    @import url('./styles.css');
`;

export * from './setupFontAwesome';
