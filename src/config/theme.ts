interface ThemeColors {
  [color: string]: string;
}

interface Theme {
  pallet: {
    ACCENT_1: string;
    ACCENT3: string;
    ERROR: string;
    DARK_CYAN: string;
    DISABLED: string;
    GRAY_BLUE: string;
    GRAY_BLUE_2: string;
    GRAY: string;
    INFO: string;
    LIGHT_BLUE_2: string;
    LIGHT_BLUE: string;
    LIGHT_CYAN: string;
    PRIMARY: string;
    SECONDARY: string;
    SHADOW: string;
    SUCCESS: string;
    WARNING: string;
    WHITE: string;
    GRAY_SHADOW: string;
    TURQUOISE: string;
    LIGHT_GRAY: string;
  };
  GUTTER: string;
}

const colors: ThemeColors = {
  BLACK: '#333',
  BLUE: '#4da6f6',
  DARK_BLUE: '#4E606A',
  DARK_CYAN: '#003847',
  DISABLED: '#95A1A6',
  ERROR: '#EB4820',
  GRAY_BLUE: '#4E606A',
  GRAY_BLUE_2: '#424749',
  GRAY: '#4E606A',
  GRAY_SHADOW: '#00000066',
  LIGHT_BLUE_2: '#00a5b5',
  LIGHT_BLUE: '#00708D',
  LIGHT_CYAN: '#dceeef',
  RED: '#EB4820',
  SHADOW: '#00000029',
  WHITE: '#FFF',
  TURQUOISE: '#81c8d1',
  LIGHT_GRAY: '#cdd5d8',
};

const theme: Theme = {
  pallet: {
    ACCENT_1: colors.GRAY,
    ACCENT3: '',
    ERROR: colors.RED,
    DARK_CYAN: colors.DARK_CYAN,
    DISABLED: colors.DISABLED,
    GRAY_BLUE: colors.GRAY_BLUE,
    GRAY_BLUE_2: colors.GRAY_BLUE_2,
    GRAY: colors.GRAY,
    GRAY_SHADOW: colors.GRAY_SHADOW,
    INFO: '',
    LIGHT_BLUE_2: colors.LIGHT_BLUE_2,
    LIGHT_BLUE: colors.LIGHT_BLUE,
    LIGHT_CYAN: colors.LIGHT_CYAN,
    PRIMARY: colors.BLUE,
    SECONDARY: '',
    SHADOW: colors.SHADOW,
    SUCCESS: '',
    WARNING: '',
    WHITE: colors.WHITE,
    TURQUOISE: colors.TURQUOISE,
    LIGHT_GRAY: colors.LIGHT_GRAY,
  },
  GUTTER: '20px',
};

export default theme;
