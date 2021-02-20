import { flexRow, pxToRem } from '@faxi/web-css-utilities';
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
export { default as TextArea } from './components/_atoms/TextArea';

/*
 * Molecules
 */
export { default as Checkbox } from './components/_molecules/Checkbox';
export { default as Dropdown } from './components/_molecules/Dropdown';
export { default as NavigationLinks } from './components/_molecules/NavigationLinks';
export { default as Expander } from './components/_molecules/Expander';
export { default as TagsInput } from './components/_molecules/TagsInput';
export { default as ToggleButton } from './components/_molecules/ToggleButton';

/*
 * Organisms
 */
export { default as Error } from './components/_organisms/Error';
export { default as Footer } from './components/_organisms/Footer';
export { default as Modal } from './components/_organisms/Modal';

/*
 * Layouts
 */
export { ContentContainer } from './components/_layouts/ContentContainer';
export { ListView } from './components/_layouts/ListView';

/*
 * Templates
 */
export { default as MainTemplate } from './components/_templates/MainTemplate';

/*
 * Prop Types
 */
export { CheckboxProps } from './components/_molecules/Checkbox/Checkbox.component';
export { DropdownProps } from './components/_molecules/Dropdown/Dropdown.component';
export { ErrorProps } from './components/_organisms/Error/Error.component';
export { IconProps } from './components/_atoms/Icon/Icon.component';
export { InputProps } from './components/_atoms/Input/Input.component';
export { TextAreaProps } from './components/_atoms/TextArea/TextArea.component';

/*
 * Types
 */
export {
  IDropdown,
  IDropdownOption,
} from './components/_molecules/Dropdown/Dropdown.component';
export { ErrorItems } from './components/_organisms/Error/Error.component';
export { ErrorType } from './components/_organisms/Error/Error.component';
export { NavLink } from './components/_molecules/NavigationLinks/NavigationLinks.component';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  .wcl-dropdown {
    cursor: pointer;
    user-select: none;

    &--select {
      position: relative;
    }

    &__heading {
      ${flexRow('space-between', 'center')};
      font-weight: bold;
      font-size: ${pxToRem('16px')};
      padding: ${pxToRem('10px')} ${pxToRem('20px')};

      &--select {
        padding: ${pxToRem('10px')} ${pxToRem('20px')};
      }

      &__icon {
        &--open {
          transform: rotate(180deg);
        }
      }
    }

    &__options {
      &--select {
        position: absolute;
        width: 100%;
        z-index: 999; 
        max-height: ${pxToRem('300px')};
        overflow: auto;
      }

      &__option {
        padding: ${pxToRem('10px')} ${pxToRem('20px')};
        font-weight: 500;
        position: relative;
        overflow: hidden;
        cursor: pointer;
      }
    }
  }
`;

export * from './components/Icon';
