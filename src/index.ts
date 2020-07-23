import { createGlobalStyle } from 'styled-components';
/*
 * Atoms
 */
export { default as Button } from './components/_atoms/Button';
export { default as Icon } from './components/_atoms/Icon';
export { default as Image } from './components/_atoms/Image';
export { default as Input } from './components/_atoms/Input';
export { default as Label } from './components/_atoms/Label';
export { default as ParallaxBackground } from './components/_atoms/ParallaxBackground';
export { default as Spinner } from './components/_atoms/Spinner';
export { default as Text } from './components/_atoms/Text';

/*
 * Molecules
 */
export { default as Checkbox } from './components/_molecules/Checkbox';
export { default as NavigationLinks } from './components/_molecules/NavigationLinks';
export { default as CookiePolicy } from './components/_molecules/CookiePolicy';

/*
 * Organisms
 */
export { default as Chart } from './components/_organisms/Chart';
export { default as Modal } from './components/_organisms/Modal';

/*
 * Prop Types
 */
export { IconProps } from './components/_atoms/Icon/Icon.component';
export { InputProps } from './components/_atoms/Input/Input.component';
export { CheckboxProps } from './components/_molecules/Checkbox/Checkbox.component';

/*
 * Types
 */
export { NavLink } from './components/_molecules/NavigationLinks/NavigationLinks.component';

export const GlobalStyle = createGlobalStyle`
    @import url('./styles.css');
`;

export * from './components/Icon';
