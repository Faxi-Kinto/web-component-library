import { cssUnitsRegex } from './helpers';
import { defaultFontSize } from './constants';

export const size = (width: string, height: string = width): string => {
  return `
    width: ${width};
    height: ${height};
  `;
};

export const maxSize = (
  maxWidth: string,
  maxHeight: string = maxWidth
): string => {
  if (
    cssUnitsRegex.test(maxWidth) && maxWidth === maxHeight
      ? true
      : cssUnitsRegex.test(maxHeight)
  ) {
    return `
            max-width: ${maxWidth};
            max-height: ${maxHeight};
        `;
  }
  return ``;
};

export const positionAbsolute = (
  top: string,
  right: string,
  bottom?: string,
  left?: string
): string => {
  return `
    position: absolute;
    top: ${top};
    right: ${right};
    bottom: ${bottom ? bottom : ''};
    left: ${left ? left : ''};
  `;
};

export const positionFixed = (
  top: string,
  right: string,
  bottom: string = top,
  left: string = right
): string => {
  return `
    position: fixed;
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
  `;
};

export const boxShadow = (
  hOffset: string,
  vOffset: string,
  blur: string,
  color: string
): string => {
  return `
  box-shadow: ${pxToRem(hOffset)} ${pxToRem(vOffset)} ${pxToRem(
    blur
  )} ${color}; 
  `;
};

export const padding = (
  top: string,
  right: string,
  bottom = top,
  left = right
): string => {
  return `
  padding: ${top} ${right} ${bottom} ${left};
  `;
};

export const stripPxFromString = (value: string): number => {
  return Number(value.replace(/[^-0-9/.]/g, ''));
};

export const pxToRem = (pxValue: string): string => {
  const scaled =
    stripPxFromString(pxValue) / stripPxFromString(defaultFontSize);
  return `${scaled}rem`;
};

export const fontSize = (fontSize: string, lineHeight = fontSize): string => {
  if (!/[1-9]\d*px/.test(fontSize)) return defaultFontSize;

  return `
    font-size: ${pxToRem(fontSize)};
    line-height ${lineHeight};
  `;
};
