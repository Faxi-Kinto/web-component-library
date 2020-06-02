export const marginChildren = (margins: string, ignoreLast = true): string => {
  return `
    > * {
        margin: ${margins};
    }
  
    ${
      ignoreLast
        ? `
        > :last-child {
            margin: 0;
        }
        `
        : ''
    }
    `;
};
