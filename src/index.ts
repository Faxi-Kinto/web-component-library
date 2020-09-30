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
export { default as Dropdown } from './components/_molecules/Dropdown';
export { default as NavigationLinks } from './components/_molecules/NavigationLinks';
export { default as CapturePDFButton } from './components/_molecules/CapturePDFButton';
export { default as Expander } from './components/_molecules/Expander';

/*
 * Organisms
 */
export { default as Chart } from './components/_organisms/Chart';
export { default as Error } from './components/_organisms/Error';
export { default as Modal } from './components/_organisms/Modal';

/*
 * Prop Types
 */
export { CheckboxProps } from './components/_molecules/Checkbox/Checkbox.component';
export { DropdownProps } from './components/_molecules/Dropdown/Dropdown.component';
export { ErrorProps } from './components/_organisms/Error/Error.component';
export { IconProps } from './components/_atoms/Icon/Icon.component';
export { InputProps } from './components/_atoms/Input/Input.component';

/*
 * Types
 */
export { DropdownOption } from './components/_molecules/Dropdown/Dropdown.component';
export { ErrorItems } from './components/_organisms/Error/Error.component';
export { ErrorType } from './components/_organisms/Error/Error.component';
export { NavLink } from './components/_molecules/NavigationLinks/NavigationLinks.component';

export const GlobalStyle = createGlobalStyle`
    @import url('./styles.css');
`;

export * from './components/Icon';
