import { FlattenSimpleInterpolation } from 'styled-components';

// default breakpoints
const responsiveLg = 1280;
const responsiveMd = 1024;
const responsiveSm = 768;
const responsiveXs = 568;
const responsiveXxs = 375;

// breakpoint limits
// const responsiveLgMin = responsiveLg;

// const responsiveMdMin = responsiveMd;
const responsiveMdMax = responsiveLg - 1;

const responsiveSmMin = responsiveSm;
const responsiveSmMax = responsiveMd - 1;

// const responsiveXsMin = responsiveXs;
const responsiveXsMax = responsiveSm - 1;

const responsiveXxsMin = responsiveXxs;
const responsiveXxsMax = responsiveXs - 1;

const ipadLandscape = (content: FlattenSimpleInterpolation): string => {
  return `
    @media (min-width: ${responsiveSmMax}px) and (max-width: ${responsiveLg}px) {
      ${content.join('')}
    }`;
};

const laptop = (content: FlattenSimpleInterpolation): string => {
  return `
    @media (max-width: ${responsiveMdMax}px) {
      ${content.join('')}
    }
    `;
};

const aboveTablet = (content: FlattenSimpleInterpolation): string => {
  return `
    @media (min-width: ${responsiveSmMin}px) {
      ${content.join('')}
    }
    `;
};

const tablet = (content: FlattenSimpleInterpolation): string => {
  return `
    @media (max-width: ${responsiveSm}px) {
      ${content.join('')}
    }
    `;
};

const tabletOnly = (content: FlattenSimpleInterpolation): string => {
  return `
  @media (max-width: ${responsiveSmMax}px) and (min-width: ${responsiveSmMin}px) {
      ${content.join('')}
    }`;
};

const phablet = (content: FlattenSimpleInterpolation): string => {
  return `
    @media (max-width: ${responsiveXsMax}px) {
      ${content.join('')}
    }`;
};

const mobile = (content: FlattenSimpleInterpolation): string => {
  return `
      @media (max-width: ${responsiveXxsMax}px) {
        ${content.join('')}
      }`;
};

const belowMobile = (content: FlattenSimpleInterpolation): string => {
  return `
        @media (max-width: ${responsiveXxsMin}px) {
          ${content.join('')}
        }`;
};

export {
  ipadLandscape,
  laptop,
  aboveTablet,
  tablet,
  tabletOnly,
  phablet,
  mobile,
  belowMobile,
};
